import { database, random } from 'faker'

import { ButtonProps } from '@/core/application/common/components'
import { mockButtonType } from '@/core/application/common/components/buttons/button/mocks'

export const mockButtonProps = (): ButtonProps => ({
  name: database.column(),
  label: random.words(),
  buttonType: mockButtonType(),
})
