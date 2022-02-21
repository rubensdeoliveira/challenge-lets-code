import { random } from 'faker'

import { ButtonProps } from '@/core/application/common/components'
import { mockButtonType } from '@/core/application/common/components/button/mocks'

export const mockButtonProps = (): ButtonProps => ({
  label: random.words(),
  buttonType: mockButtonType(),
})
