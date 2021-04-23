import { css } from '@emotion/react'

export enum CssVars {
  FocusBorderColor = '--klee-focus-border-color',
  Transform = '--klee-transform',
  TranslateX = '--klee-translate-x',
  TranslateY = '--klee-translate-y',
  Rotate = '--klee-rotate',
  ScaleX = '--klee-scale-x',
  ScaleY = '--klee-scale-y',
  SkewX = '--klee-skew-x',
  SkewY = '--klee-skew-y',
}

export const cssVar = (value: CssVars, fallback?: any) => {
  return `var(${value}${fallback ? `, ${fallback}` : ''})`
}

const transformValues = [
  `translateX(${cssVar(CssVars.TranslateX)})`,
  `translateY(${cssVar(CssVars.TranslateY)})`,
  `rotate(${cssVar(CssVars.Rotate)})`,
  `scaleX(${cssVar(CssVars.ScaleX)})`,
  `scaleY(${cssVar(CssVars.ScaleY)})`,
  `skewX(${cssVar(CssVars.SkewX)})`,
  `skewY(${cssVar(CssVars.SkewY)})`,
]
const transformGpuValues = [
  `translate3d(${cssVar(CssVars.TranslateX)}, ${cssVar(CssVars.TranslateX)}, 0)`,
  `rotate(${cssVar(CssVars.Rotate)})`,
  `scaleX(${cssVar(CssVars.ScaleX)})`,
  `scaleY(${cssVar(CssVars.ScaleY)})`,
  `skewX(${cssVar(CssVars.SkewX)})`,
  `skewY(${cssVar(CssVars.SkewY)})`,
]

export const transformCssWithVariables = transformValues.join(' ')
export const transformGpuCssWithVariables = transformGpuValues.join(' ')

export const initializeCssVars = css({
  ':root': {
    [CssVars.FocusBorderColor]: 'rgb(66 153 225 / 60%)',
    [CssVars.TranslateX]: '0',
    [CssVars.TranslateY]: '0',
    [CssVars.Rotate]: '0',
    [CssVars.ScaleX]: '1',
    [CssVars.ScaleY]: '1',
    [CssVars.SkewX]: '0',
    [CssVars.SkewY]: '0',
    [CssVars.Transform]: transformValues.join(' '),
  },
})
