import * as Service from '../../api/service'
import { requestPassphrase } from '../../components/passphrase-modal'
import { GetServiceStateResponse } from '../../models/console-state'
import { ListWalletsResponse } from '../../models/list-wallets'
import { ListNetworksResponse } from '../../models/network'
import { GetVersionResponse } from '../../models/version'
import { GlobalDispatch, GlobalState } from './global-context'
import { GlobalAction } from './global-reducer'
import { AppToaster } from '../../components/toaster'
import { Colors } from '../../config/colors'

export function initAppAction() {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    try {
      const isInit = await Service.IsAppInitialised()

      if (!isInit) {
        await Service.InitialiseApp({ vegaHome: '' })
      }

      // App initialised check what wallets are available
      const res = await Promise.all([
        await Service.ListNetworks(),
        await Service.ListWallets(),
        await Service.GetServiceState(),
        await Service.GetVersion()
      ])

      dispatch(initAppSuccessAction(...res))
    } catch (err) {
      dispatch(initAppFailureAction())
    }
  }
}

export function initAppSuccessAction(
  networks: ListNetworksResponse,
  wallets: ListWalletsResponse,
  service: GetServiceStateResponse,
  version: GetVersionResponse
): GlobalAction {
  return {
    type: 'INIT_APP',
    isInit: true,
    networks: networks.networks,
    wallets: wallets.wallets,
    serviceRunning: service.Running,
    serviceUrl: service.URL,
    version: version.version
  }
}

export function initAppFailureAction(): GlobalAction {
  return {
    type: 'INIT_APP',
    isInit: false,
    wallets: [],
    networks: [],
    serviceRunning: false,
    serviceUrl: '',
    version: ''
  }
}

export function addWalletAction(wallet: string): GlobalAction {
  return { type: 'ADD_WALLET', wallet }
}

export function addKeypairAction(wallet: string) {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    try {
      const passphrase = await requestPassphrase()
      const res = await Service.GenerateKey({
        wallet,
        passphrase,
        metadata: []
      })
      dispatch({
        type: 'ADD_KEYPAIR',
        wallet,
        keypair: res.key
      })
    } catch (err) {
      if (err !== 'dismissed') {
        console.log(err)
        AppToaster.show({ message: `Error: ${err}`, color: Colors.RED })
      }
    }
  }
}

export function changeNetworkAction(network: string): GlobalAction {
  return { type: 'CHANGE_NETWORK', network }
}

export function getKeysAction(wallet: string, cb: Function) {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const state = getState()
    const selectedWallet = state.wallets.find(w => w.name === wallet)

    if (selectedWallet?.keypairs) {
      dispatch({ type: 'CHANGE_WALLET', wallet })
      cb()
    } else {
      try {
        const passphrase = await requestPassphrase()
        const keys = await Service.ListKeys({ wallet, passphrase })
        dispatch({ type: 'SET_KEYPAIRS', wallet, keypairs: keys.keys || [] })
        cb()
      } catch (err) {
        console.log(err)
        if (err !== 'dismissed') {
          AppToaster.show({ message: `Error: ${err}`, color: Colors.RED })
        }
      }
    }
  }
}

export function setDrawerAction(open: boolean): GlobalAction {
  return { type: 'SET_DRAWER', open }
}

export function setPassphraseModalAction(open: boolean): GlobalAction {
  return { type: 'SET_PASSPHRASE_MODAL', open }
}
