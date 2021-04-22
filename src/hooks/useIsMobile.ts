import { useMatchMedia } from '@liinkiing/react-hooks'

import { breakpoints } from '../styles/theme'

const useIsMobile = (): boolean => useMatchMedia(`screen and (max-width: ${breakpoints.tablet})`)

export default useIsMobile
