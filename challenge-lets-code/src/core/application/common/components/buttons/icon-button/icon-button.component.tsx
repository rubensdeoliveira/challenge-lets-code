import React from 'react'
import { useTheme } from 'styled-components'

import { IconButtonProps } from '@/core/application/common/components'
import { IconButtonContainer } from '@/core/application/common/components/buttons/icon-button/styles'

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  icon: Icon,
  ...rest
}: IconButtonProps) => {
  const { colors } = useTheme()

  return (
    <IconButtonContainer {...rest} data-testid={name}>
      <Icon size={24} color={colors.white} name="icon-button-icon" />
    </IconButtonContainer>
  )
}
