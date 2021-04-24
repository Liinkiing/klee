import { themeGet } from '@styled-system/theme-get'
import { Scale } from 'styled-system'

const globalSet = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset'])

const trimSpace = (str: string) => str.trim()

export const bgClipTransform = (value: string | null | undefined) => {
  if (!value) return {}
  return value === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: value }
}

export const translateTransform = (value: string | number | null | undefined, scale?: Scale) => {
  if (!value) return 0
  if (!scale) {
    return value
  }
  if (typeof value === 'string' && value in scale) {
    return scale[value as any]
  }
  if (typeof value === 'string') {
    return value
  }
  const index = Math.abs(value)
  const computedValue = scale[index]
  if (!computedValue) {
    return `${value}px`
  }
  if (value < 0) {
    return typeof computedValue === 'string' ? `-${computedValue}` : -computedValue
  }

  return computedValue ?? value
}

// Taken from here and adapted it a bit for simplicity sake
// https://github.com/chakra-ui/chakra-ui/blob/75edcf41e7ff4acc2569f2169949063c164d8f6e/packages/styled-system/src/utils/parse-gradient.ts
// Again, check ChakraUI, a great library!
export const bgGradientTransform = (value: string | null | undefined, colors?: Scale) => {
  if (value == null || globalSet.has(value)) return value
  const regex = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g
  const { type, values } = regex.exec(value)?.groups ?? {}
  if (!type || !values) return value

  const _type = type.includes('-gradient') ? type : `${type}-gradient`
  const [direction, ...stops] = values.split(',').map(trimSpace).filter(Boolean)
  if (stops?.length === 0) return value

  stops.unshift(direction)

  const _values = stops.map(stop => {
    const [_color, _stop] = stop.split(' ')

    const color = themeGet(`colors.${_color}`, _color)({ theme: { colors } })
    return _stop ? [color, _stop].join(' ') : color
  })

  return `${_type}(${_values.join(', ')})`
}
