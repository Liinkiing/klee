declare module 'react-no-ssr' {
  import { FC, ReactNode } from 'react'
  declare const NoSSR: FC<{ children: ReactNode }>

  export = NoSSR
}
