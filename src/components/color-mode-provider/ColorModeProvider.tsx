import React, { useEffect } from 'react'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import type { AppColorScheme, Context } from './context'
import { ColorModeContext } from './context'

const BODY_CLASS = 'klee-mode'

interface Props {
  readonly defaultColorMode?: AppColorScheme
}

export const ColorModeProvider: FC<Props> = ({ defaultColorMode = 'light', children }) => {
  const [currentMode, setCurrentMode] = useState<AppColorScheme>(defaultColorMode)
  const context = useMemo<Context>(
    () => ({
      changeCurrentMode: setCurrentMode,
      currentMode,
    }),
    [currentMode],
  )
  useEffect(() => {
    const clearClassnames = () => {
      classNames.forEach(className => {
        window.document.body.classList.remove(className)
      })
    }
    const classNames = [`${BODY_CLASS}-light`, `${BODY_CLASS}-dark`]
    clearClassnames()
    window.document.body.classList.add(`${BODY_CLASS}-${currentMode}`)

    return () => {
      clearClassnames()
    }
  }, [currentMode])

  return <ColorModeContext.Provider value={context}>{children}</ColorModeContext.Provider>
}

export default ColorModeProvider
