import { css } from '@emotion/react'

import { CssVars } from '../../utils/css-vars'
import colors from './colors'

export const pxToRem = (px: number) => `${(px / 16).toFixed(3)}rem`

export const BASE_FOCUS = {
  outline: 'none',
  boxShadow: `var(${CssVars.FocusBorderColor}) 0px 0px 0px 2px`,
}

export const linearGradient = (direction: 'vertical' | 'horizontal', color: string = colors.white) => css`
  linear-gradient(to ${direction === 'horizontal' ? 'right' : 'bottom'},
  ${color} 0%,
  rgba(255, 255, 255, 0) 5%,
  rgba(255, 255, 255, 0) 95%,
  ${color} 100%);
`

const SCROLLBAR_WIDTH = 16

export const customScrollbar = css`
  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH}px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 ${SCROLLBAR_WIDTH}px ${SCROLLBAR_WIDTH}px transparent;
    border: solid ${SCROLLBAR_WIDTH - 10}px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 ${SCROLLBAR_WIDTH}px ${SCROLLBAR_WIDTH}px rgba(187, 187, 190, 0.38);
    border: solid ${SCROLLBAR_WIDTH - 10}px transparent;
    border-radius: ${SCROLLBAR_WIDTH}px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`
