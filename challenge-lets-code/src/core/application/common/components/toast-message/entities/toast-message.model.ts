import { ToastMessageType } from '@/core/application/common/components'

export type ToastMessageModel = {
  id: string
  type?: ToastMessageType
  title?: string
  description?: string
}
