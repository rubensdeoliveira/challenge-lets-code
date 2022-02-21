import { ToastMessageModel } from '@/core/application/common/components'

export interface ToastMessageContextData {
  addToast: (message: Omit<ToastMessageModel, 'id'>) => void
  removeToast: (id: string) => void
}
