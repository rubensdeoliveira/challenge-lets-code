import { ToastMessageType } from '@/core/application/common/components'
import { random } from 'faker'

export const mockToastMessageType = (): ToastMessageType =>
  random.arrayElement([
    ToastMessageType.Info,
    ToastMessageType.Error,
    ToastMessageType.Success,
  ])
