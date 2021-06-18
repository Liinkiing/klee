/* eslint-disable @typescript-eslint/ban-types */
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  dark: '#30363D',
  text: '#18181b',
  background: '#fff',
  black: '#000',
  white: '#fff',

  rose: {
    '50': '#fff1f2',
    '100': '#ffe4e6',
    '200': '#fecdd3',
    '300': '#fda4af',
    '400': '#fb7185',
    '500': '#f43f5e',
    '600': '#e11d48',
    '700': '#be123c',
    '800': '#9f1239',
    '900': '#881337',
  },
  pink: {
    '50': '#fdf2f8',
    '100': '#fce7f3',
    '200': '#fbcfe8',
    '300': '#f9a8d4',
    '400': '#f472b6',
    '500': '#ec4899',
    '600': '#db2777',
    '700': '#be185d',
    '800': '#9d174d',
    '900': '#831843',
  },
  fuchsia: {
    '50': '#fdf4ff',
    '100': '#fae8ff',
    '200': '#f5d0fe',
    '300': '#f0abfc',
    '400': '#e879f9',
    '500': '#d946ef',
    '600': '#c026d3',
    '700': '#a21caf',
    '800': '#86198f',
    '900': '#701a75',
  },
  purple: {
    '50': '#faf5ff',
    '100': '#f3e8ff',
    '200': '#e9d5ff',
    '300': '#d8b4fe',
    '400': '#c084fc',
    '500': '#a855f7',
    '600': '#9333ea',
    '700': '#7e22ce',
    '800': '#6b21a8',
    '900': '#581c87',
  },
  violet: {
    '50': '#f5f3ff',
    '100': '#ede9fe',
    '200': '#ddd6fe',
    '300': '#c4b5fd',
    '400': '#a78bfa',
    '500': '#8b5cf6',
    '600': '#7c3aed',
    '700': '#6d28d9',
    '800': '#5b21b6',
    '900': '#4c1d95',
  },
  indigo: {
    '100': '#dfe6fd',
    '200': '#bfcdfb',
    '300': '#9eb3f8',
    '400': '#7e9af6',
    '500': '#5e81f4',
    '600': '#4b67c3',
    '700': '#384d92',
    '800': '#263462',
    '900': '#131a31',
  },
  yellow: {
    '100': '#ffefd6',
    '200': '#ffdfad',
    '300': '#ffce85',
    '400': '#ffbe5c',
    '500': '#ffae33',
    '600': '#cc8b29',
    '700': '#99681f',
    '800': '#664614',
    '900': '#33230a',
  },
  teal: {
    '100': '#cef3fa',
    '200': '#9ee7f5',
    '300': '#6ddbf1',
    '400': '#3dcfec',
    '500': '#0cc3e7',
    '600': '#0a9cb9',
    '700': '#07758b',
    '800': '#054e5c',
    '900': '#02272e',
  },
  blue: {
    '50': '#eff6ff',
    '100': '#dbeafe',
    '200': '#bfdbfe',
    '300': '#93c5fd',
    '400': '#60a5fa',
    '500': '#3b82f6',
    '600': '#2563eb',
    '700': '#1d4ed8',
    '800': '#1e40af',
    '900': '#1e3a8a',
  },
  'light-blue': {
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#7dd3fc',
    '400': '#38bdf8',
    '500': '#0ea5e9',
    '600': '#0284c7',
    '700': '#0369a1',
    '800': '#075985',
    '900': '#0c4a6e',
  },
  cyan: {
    '50': '#ecfeff',
    '100': '#cffafe',
    '200': '#a5f3fc',
    '300': '#67e8f9',
    '400': '#22d3ee',
    '500': '#06b6d4',
    '600': '#0891b2',
    '700': '#0e7490',
    '800': '#155e75',
    '900': '#164e63',
  },
  emerald: {
    '50': '#ecfdf5',
    '100': '#d1fae5',
    '200': '#a7f3d0',
    '300': '#6ee7b7',
    '400': '#34d399',
    '500': '#10b981',
    '600': '#059669',
    '700': '#047857',
    '800': '#065f46',
    '900': '#064e3b',
  },
  green: {
    '50': '#f0fdf4',
    '100': '#dcfce7',
    '200': '#bbf7d0',
    '300': '#86efac',
    '400': '#4ade80',
    '500': '#22c55e',
    '600': '#16a34a',
    '700': '#15803d',
    '800': '#166534',
    '900': '#14532d',
  },
  lime: {
    '50': '#f7fee7',
    '100': '#ecfccb',
    '200': '#d9f99d',
    '300': '#bef264',
    '400': '#a3e635',
    '500': '#84cc16',
    '600': '#65a30d',
    '700': '#4d7c0f',
    '800': '#3f6212',
    '900': '#365314',
  },
  amber: {
    '50': '#fffbeb',
    '100': '#fef3c7',
    '200': '#fde68a',
    '300': '#fcd34d',
    '400': '#fbbf24',
    '500': '#f59e0b',
    '600': '#d97706',
    '700': '#b45309',
    '800': '#92400e',
    '900': '#78350f',
  },
  orange: {
    '50': '#fff7ed',
    '100': '#ffedd5',
    '200': '#fed7aa',
    '300': '#fdba74',
    '400': '#fb923c',
    '500': '#f97316',
    '600': '#ea580c',
    '700': '#c2410c',
    '800': '#9a3412',
    '900': '#7c2d12',
  },
  red: {
    '50': '#fef2f2',
    '100': '#fee2e2',
    '200': '#fecaca',
    '300': '#fca5a5',
    '400': '#f87171',
    '500': '#ef4444',
    '600': '#dc2626',
    '700': '#b91c1c',
    '800': '#991b1b',
    '900': '#7f1d1d',
  },
  'warm-gray': {
    '50': '#fafaf9',
    '100': '#f5f5f4',
    '200': '#e7e5e4',
    '300': '#d6d3d1',
    '400': '#a8a29e',
    '500': '#78716c',
    '600': '#57534e',
    '700': '#44403c',
    '800': '#292524',
    '900': '#1c1917',
  },
  'true-gray': {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#d4d4d4',
    '400': '#a3a3a3',
    '500': '#737373',
    '600': '#525252',
    '700': '#404040',
    '800': '#262626',
    '900': '#171717',
  },
  gray: {
    '50': '#fafafa',
    '100': '#f4f4f5',
    '200': '#e4e4e7',
    '300': '#d4d4d8',
    '400': '#a1a1aa',
    '500': '#71717a',
    '600': '#52525b',
    '700': '#3f3f46',
    '800': '#27272a',
    '900': '#18181b',
  },
  'cool-gray': {
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d1d5db',
    '400': '#9ca3af',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#1f2937',
    '900': '#111827',
  },
  'blue-gray': {
    '50': '#f8fafc',
    '100': '#f1f5f9',
    '200': '#e2e8f0',
    '300': '#cbd5e1',
    '400': '#94a3b8',
    '500': '#64748b',
    '600': '#475569',
    '700': '#334155',
    '800': '#1e293b',
    '900': '#0f172a',
  },
} as const

// type NestedColors =
//   | 'rose'
//   | 'pink'
//   | 'fuchsia'
//   | 'purple'
//   | 'violet'
//   | 'indigo'
//   | 'blue'
//   | 'cyan'
//   | 'teal'
//   | 'emerald'
//   | 'green'
//   | 'lime'
//   | 'yellow'
//   | 'amber'
//   | 'orange'
//   | 'red'
//   | 'gray'
//   | 'light-blue'
//   | 'warm-gray'
//   | 'true-gray'
//   | 'cool-gray'
//   | 'blue-gray'
//
// type Shading = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

// seems to cause rollup not to compile... weird, so currently defining here all the colors
// looks like tsdx is using a rollup plugin which does not understand quite the new TS template litterals types
// type PathsToStringProps<T> = T extends string
//   ? []
//   : {
//       [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
//     }[Extract<keyof T, string>];
//
// type Join<T extends string[], D extends string> = T extends []
//   ? never
//   : T extends [infer F]
//   ? F
//   : T extends [infer F, ...infer R]
//   ? F extends string
//     ? string extends F
//       ? string
//       : `${F}${D}${Join<Extract<R, string[]>, D>}`
//     : never
//   : string;

type NestedThemeColorsValues =
  | 'rose.50'
  | 'rose.100'
  | 'rose.200'
  | 'rose.300'
  | 'rose.400'
  | 'rose.500'
  | 'rose.600'
  | 'rose.700'
  | 'rose.800'
  | 'rose.900'
  | 'pink.50'
  | 'pink.100'
  | 'pink.200'
  | 'pink.300'
  | 'pink.400'
  | 'pink.500'
  | 'pink.600'
  | 'pink.700'
  | 'pink.800'
  | 'pink.900'
  | 'fuchsia.50'
  | 'fuchsia.100'
  | 'fuchsia.200'
  | 'fuchsia.300'
  | 'fuchsia.400'
  | 'fuchsia.500'
  | 'fuchsia.600'
  | 'fuchsia.700'
  | 'fuchsia.800'
  | 'fuchsia.900'
  | 'purple.50'
  | 'purple.100'
  | 'purple.200'
  | 'purple.300'
  | 'purple.400'
  | 'purple.500'
  | 'purple.600'
  | 'purple.700'
  | 'purple.800'
  | 'purple.900'
  | 'violet.50'
  | 'violet.100'
  | 'violet.200'
  | 'violet.300'
  | 'violet.400'
  | 'violet.500'
  | 'violet.600'
  | 'violet.700'
  | 'violet.800'
  | 'violet.900'
  | 'indigo.50'
  | 'indigo.100'
  | 'indigo.200'
  | 'indigo.300'
  | 'indigo.400'
  | 'indigo.500'
  | 'indigo.600'
  | 'indigo.700'
  | 'indigo.800'
  | 'indigo.900'
  | 'blue.50'
  | 'blue.100'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.500'
  | 'blue.600'
  | 'blue.700'
  | 'blue.800'
  | 'blue.900'
  | 'cyan.50'
  | 'cyan.100'
  | 'cyan.200'
  | 'cyan.300'
  | 'cyan.400'
  | 'cyan.500'
  | 'cyan.600'
  | 'cyan.700'
  | 'cyan.800'
  | 'cyan.900'
  | 'teal.50'
  | 'teal.100'
  | 'teal.200'
  | 'teal.300'
  | 'teal.400'
  | 'teal.500'
  | 'teal.600'
  | 'teal.700'
  | 'teal.800'
  | 'teal.900'
  | 'emerald.50'
  | 'emerald.100'
  | 'emerald.200'
  | 'emerald.300'
  | 'emerald.400'
  | 'emerald.500'
  | 'emerald.600'
  | 'emerald.700'
  | 'emerald.800'
  | 'emerald.900'
  | 'green.50'
  | 'green.100'
  | 'green.200'
  | 'green.300'
  | 'green.400'
  | 'green.500'
  | 'green.600'
  | 'green.700'
  | 'green.800'
  | 'green.900'
  | 'lime.50'
  | 'lime.100'
  | 'lime.200'
  | 'lime.300'
  | 'lime.400'
  | 'lime.500'
  | 'lime.600'
  | 'lime.700'
  | 'lime.800'
  | 'lime.900'
  | 'yellow.50'
  | 'yellow.100'
  | 'yellow.200'
  | 'yellow.300'
  | 'yellow.400'
  | 'yellow.500'
  | 'yellow.600'
  | 'yellow.700'
  | 'yellow.800'
  | 'yellow.900'
  | 'amber.50'
  | 'amber.100'
  | 'amber.200'
  | 'amber.300'
  | 'amber.400'
  | 'amber.500'
  | 'amber.600'
  | 'amber.700'
  | 'amber.800'
  | 'amber.900'
  | 'orange.50'
  | 'orange.100'
  | 'orange.200'
  | 'orange.300'
  | 'orange.400'
  | 'orange.500'
  | 'orange.600'
  | 'orange.700'
  | 'orange.800'
  | 'orange.900'
  | 'red.50'
  | 'red.100'
  | 'red.200'
  | 'red.300'
  | 'red.400'
  | 'red.500'
  | 'red.600'
  | 'red.700'
  | 'red.800'
  | 'red.900'
  | 'gray.50'
  | 'gray.100'
  | 'gray.200'
  | 'gray.300'
  | 'gray.400'
  | 'gray.500'
  | 'gray.600'
  | 'gray.700'
  | 'gray.800'
  | 'gray.900'
  | 'light-blue.50'
  | 'light-blue.100'
  | 'light-blue.200'
  | 'light-blue.300'
  | 'light-blue.400'
  | 'light-blue.500'
  | 'light-blue.600'
  | 'light-blue.700'
  | 'light-blue.800'
  | 'light-blue.900'
  | 'warm-gray.50'
  | 'warm-gray.100'
  | 'warm-gray.200'
  | 'warm-gray.300'
  | 'warm-gray.400'
  | 'warm-gray.500'
  | 'warm-gray.600'
  | 'warm-gray.700'
  | 'warm-gray.800'
  | 'warm-gray.900'
  | 'true-gray.50'
  | 'true-gray.100'
  | 'true-gray.200'
  | 'true-gray.300'
  | 'true-gray.400'
  | 'true-gray.500'
  | 'true-gray.600'
  | 'true-gray.700'
  | 'true-gray.800'
  | 'true-gray.900'
  | 'cool-gray.50'
  | 'cool-gray.100'
  | 'cool-gray.200'
  | 'cool-gray.300'
  | 'cool-gray.400'
  | 'cool-gray.500'
  | 'cool-gray.600'
  | 'cool-gray.700'
  | 'cool-gray.800'
  | 'cool-gray.900'
  | 'blue-gray.50'
  | 'blue-gray.100'
  | 'blue-gray.200'
  | 'blue-gray.300'
  | 'blue-gray.400'
  | 'blue-gray.500'
  | 'blue-gray.600'
  | 'blue-gray.700'
  | 'blue-gray.800'
  | 'blue-gray.900'

type RootThemeColorsValues = 'transparent' | 'current' | 'dark' | 'black' | 'white' | 'text' | 'background'

export type ThemeColorsValues = NestedThemeColorsValues | RootThemeColorsValues | (string & {})

export default colors
