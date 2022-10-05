import { useState, useEffect } from 'react'
import { produce } from 'immer'
import { nanoid } from 'nanoid'
import omit from 'lodash/omit'
import { useGlobal } from '../../contexts/global/global-context'
import { EVENTS } from '../../lib/events'
import { parseTx } from '../../lib/transactions'
import { EventsOff, EventsOn } from '../../wailsjs/runtime'
import type { RawInteraction, Interaction } from './types'
import { InteractionFlow } from './interaction-flow'

type IndexedInteractions = {
  ids: string[]
  values: Record<string, Interaction[]>
}

/**
 * Handles incoming interactions
 */
export function InteractionManager() {
  const [interactions, setInteractions] = useState<IndexedInteractions>({ ids: [], values: {} })
  const { service, dispatch } = useGlobal()
  const traceId = interactions.ids[0]
  const events = traceId ? interactions.values[traceId] : undefined

  useEffect(() => {
    const loadTransactions = async () => {
      const [queue, history] = await Promise.all([
        service.ListConsentRequests(),
        service.ListSentTransactions(),
      ])
      dispatch({
        type: 'SET_TRANSACTION_QUEUE',
        payload: queue.requests.map(parseTx)
      })
      dispatch({
        type: 'SET_TRANSACTION_HISTORY',
        payload: history.transactions,
      })
    }

    loadTransactions()
  }, [service, dispatch])

  // Get any already pending tx on startup
  useEffect(() => {
    // Listen for new incoming transactions
    EventsOn(EVENTS.NEW_INTERACTION_EVENT, (interaction: RawInteraction) => {
      console.log(interaction)
      setInteractions(interactions => produce(interactions, interactions => {
        const wrappedInteraction = {
          meta: {
            id: nanoid(),
          },
          event: interaction,
        }

        if (!interactions.ids.includes(interaction.traceId) || !interactions.values[interaction.traceId]) {
          interactions.ids.push(interaction.traceId)
          interactions.values[interaction.traceId] = [wrappedInteraction]
          return
        }
        interactions.values[interaction.traceId].push(wrappedInteraction)
      }))
    })
    return () => {
      EventsOff(EVENTS.NEW_INTERACTION_EVENT)
    }
  }, [])

  if (!events) {
    return null
  }

  console.log(interactions)

  return (
    <InteractionFlow
      events={events}
      onFinish={() => setInteractions(interactions => ({
        ids: interactions.ids.slice(1),
        values: omit(interactions.values, interactions.ids.slice(0, 1)),
      }))}
    />
  )
}
