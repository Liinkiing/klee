import { ToastProps } from './Toast'
import { Emitter, UIEvents } from '../../utils/emitter'
import { uuid } from '../../utils/string'

export const toast = (value: Omit<ToastProps, 'id'>): void => {
  Emitter.emit(UIEvents.ToastShow, { position: 'top', ...value, id: uuid() })
}
