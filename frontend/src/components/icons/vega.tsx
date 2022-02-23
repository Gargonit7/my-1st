import React from 'react'

import { style as defaultStyle } from './style'

export function Vega({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width='111'
      height='24'
      fill='none'
      style={{ ...defaultStyle, ...style }}
    >
      <path
        fill='currentColor'
        d='M10.371 20.794 17.183.02h3.42l-8.436 23.965H8.471L0 .02h3.48l6.891 20.774ZM34.994 13.019v8.249h13.382v2.716H31.782V.019h16.3v2.715H34.994v7.577h11.658v2.708H34.994ZM61.25 2.92h2.88v18.195h-2.88V2.92ZM75.653 0v2.92H64.129V0h11.525ZM64.129 24v-2.885h11.525V24H64.129Zm14.405-2.885h-2.88v-5.77h-5.762v-2.89h8.642v8.66Zm0-18.195v2.884h-2.88V2.92h2.88ZM110.71 23.984h-3.354l-1.763-4.826h-12.03L91.8 23.984h-3.279L97.807.019h3.626l9.277 23.965ZM99.528 2.904l-4.949 13.544h10.002L99.597 2.903h-.07Z'
      ></path>
    </svg>
  )
}
