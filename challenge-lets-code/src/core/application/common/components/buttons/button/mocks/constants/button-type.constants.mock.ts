import { random } from 'faker'

import { ButtonType } from '@/core/application/common/components'

export const mockButtonType = (): ButtonType =>
  random.arrayElement(Object.values(ButtonType))
