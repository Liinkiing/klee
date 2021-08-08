import mitt from 'mitt'

import { ToastProps } from '../components/toast/Toast'

export enum UIEvents {
  ToastShow = 'toast-show',
}

type Events = {
  [UIEvents.ToastShow]: ToastProps
}

export const Emitter = mitt<Events>()
