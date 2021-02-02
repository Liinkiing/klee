import EventEmitter from 'events'

export enum UIEvents {
  ToastShow = 'toast-show',
}

export const Emitter = new EventEmitter()
