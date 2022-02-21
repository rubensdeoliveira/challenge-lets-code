import { ToastMessageModel } from '@/core/application/common/components'
import { mockToastMessageType } from '@/core/application/common/components/toast-message/mocks'
import { random, datatype } from 'faker'

export const mockToastMessageModel = (): ToastMessageModel => ({
  id: datatype.uuid(),
  title: random.words(),
  description: random.words(),
  type: mockToastMessageType(),
})
