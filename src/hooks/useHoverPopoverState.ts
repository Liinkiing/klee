// https://github.com/reakit/reakit/pull/633, but added timeout in parameters, thx MY MEEEEEEN
import { useCallback, useEffect, useRef } from 'react'
import { PopoverInitialState, PopoverStateReturn, usePopoverState } from 'reakit/Popover'

export const useHoverPopoverState = (initialState?: PopoverInitialState & { timeout?: number }): PopoverStateReturn => {
  const timeout = initialState?.timeout ?? 300
  const showTimeout = useRef<number | null>(null)
  const hideTimeout = useRef<number | null>(null)
  const popover = usePopoverState(initialState)
  const clearTimeouts = useCallback(() => {
    if (showTimeout.current !== null) {
      window.clearTimeout(showTimeout.current)
    }
    if (hideTimeout.current !== null) {
      window.clearTimeout(hideTimeout.current)
    }
  }, [])
  const show = useCallback(() => {
    clearTimeouts()
    showTimeout.current = window.setTimeout(() => {
      popover.show()
    }, timeout)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimeouts, popover.show])
  const hide = useCallback(() => {
    clearTimeouts()
    hideTimeout.current = window.setTimeout(() => {
      popover.hide()
    }, timeout)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimeouts, popover.hide])
  useEffect(
    () => () => {
      clearTimeouts()
    },
    [clearTimeouts],
  )
  return {
    ...popover,
    show,
    hide,
  }
}
