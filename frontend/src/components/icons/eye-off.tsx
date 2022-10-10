import React from 'react'

import { style as defaultStyle } from './style'

export function EyeOff({ style }: { style?: React.CSSProperties }) {
	return (
		<svg
			style={{ ...defaultStyle, fill: 'transparent', ...style }}
			viewBox='0 0 16 16'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16,7.97c0-0.01,0-0.01,0-0.02c0,0,0-0.01,0-0.01c0-0.01,0-0.01,0-0.02
				c0-0.01,0-0.01,0-0.02c0,0,0,0,0,0c-0.02-0.14-0.08-0.26-0.17-0.36c-0.49-0.63-1.07-1.2-1.65-1.72l-3.16,2.26
				c-0.04,1.61-1.36,2.9-2.98,2.9c-0.31,0-0.6-0.06-0.88-0.15L5.09,12.3c0.44,0.19,0.9,0.36,1.37,0.47C7.43,13,8.4,13.01,9.38,12.82
				c0.88-0.17,1.74-0.54,2.53-0.98c1.25-0.7,2.39-1.67,3.38-2.75c0.18-0.2,0.37-0.41,0.53-0.62c0.09-0.1,0.15-0.22,0.17-0.36
				c0,0,0,0,0,0c0-0.01,0-0.01,0-0.02c0-0.01,0-0.01,0-0.02c0,0,0-0.01,0-0.01c0-0.01,0-0.01,0-0.02c0-0.01,0-0.02,0-0.03
				C16,7.99,16,7.98,16,7.97z M15.57,3.8C15.82,3.62,16,3.34,16,3c0-0.55-0.45-1-1-1c-0.22,0-0.41,0.08-0.57,0.2l-0.01-0.01
				l-2.67,1.91c-0.69-0.38-1.41-0.69-2.17-0.87C8.62,3,7.64,2.99,6.67,3.18C5.79,3.36,4.93,3.72,4.14,4.17
				c-1.25,0.7-2.39,1.67-3.38,2.75c-0.18,0.2-0.37,0.41-0.53,0.62C0,7.83,0,8.17,0.22,8.46c0.51,0.66,1.11,1.25,1.73,1.79
				c0.18,0.16,0.38,0.29,0.56,0.44l-2.09,1.5l0.01,0.01C0.18,12.38,0,12.66,0,13c0,0.55,0.45,1,1,1c0.22,0,0.41-0.08,0.57-0.2
				l0.01,0.01l14-10L15.57,3.8z M5.16,8.8C5.09,8.54,5.05,8.28,5.05,8c0-1.64,1.34-2.98,2.99-2.98c0.62,0,1.19,0.21,1.66,0.53
				L5.16,8.8z'
			/>
		</svg>
	)
}
