import React from 'react'

import {
  ButtonPropsWithChildren,
  ButtonType,
} from '@/core/application/common/components'
import { ButtonContainer } from '@/core/application/common/components/buttons/button/styles'

export const Button: React.FC<ButtonPropsWithChildren> = ({
  name,
  children,
  label,
  buttonType = ButtonType.Primary,
  ...rest
}: ButtonPropsWithChildren) => {
  return (
    <ButtonContainer {...rest} buttonType={buttonType} data-testid={name}>
      {children || label}
    </ButtonContainer>
  )
}
