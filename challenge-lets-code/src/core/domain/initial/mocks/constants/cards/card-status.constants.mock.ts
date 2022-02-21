import { random } from 'faker'

import { CardStatus } from '@/core/domain/initial/constants'

export const mockCardStatus = (): CardStatus =>
  random.arrayElement(Object.values(CardStatus))
