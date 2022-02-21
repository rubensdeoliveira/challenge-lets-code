import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ButtonType } from '@/core/application/common/components'
import { ThemeModel } from '@/core/application/common/styles'

type ButtonProps = {
  buttonType: ButtonType
}

type GetButtonTypeStylesProps = {
  theme: ThemeModel
  buttonType: ButtonType
}

const GetButtonTypeStyles = ({
  theme,
  buttonType,
}: GetButtonTypeStylesProps): FlattenSimpleInterpolation => {
  switch (buttonType) {
    case ButtonType.Primary:
      return css`
        background: ${theme.colors.blue500};
        color: ${theme.colors.white};
        border: 0;
      `
    case ButtonType.Secondary:
      return css`
        background: transparent;
        color: ${theme.colors.blue500};
        border: 2px solid ${theme.colors.blue500};
      `
  }
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  width: 200px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.8rem;
  ${props => GetButtonTypeStyles(props)};
`
