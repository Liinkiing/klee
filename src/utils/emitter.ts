import mitt from 'mitt'

export enum UIEvents {
  ToastShow = 'toast-show',
}

export const Emitter = mitt()
