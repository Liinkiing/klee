import { Global } from '@emotion/react'
import React from 'react'

import { initializeCssVars } from '../utils/css-vars'

export const GlobalStyles = () => (
  <Global
    styles={{
      ...initializeCssVars,
    }}
  />
)

export default GlobalStyles
