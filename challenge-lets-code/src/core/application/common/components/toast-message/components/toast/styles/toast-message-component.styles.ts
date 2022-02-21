import styled, { css, SimpleInterpolation } from 'styled-components'

import { ToastMessageType } from '@/core/application/common/components'
import { ThemeModel } from '@/core/application/common/styles'

type GetToastMessageTypeStyle = {
  theme: ThemeModel
  type: ToastMessageType
}

const getToastMessageTypeStyle = ({
  theme,
  type,
}: GetToastMessageTypeStyle): SimpleInterpolation => {
  switch (type) {
    case ToastMessageType.Success:
      return css`
        background-color: ${theme.colors.green500};
      `
    case ToastMessageType.Error:
      return css`
        background-color: ${theme.colors.red500};
      `
    case ToastMessageType.Info:
      return css`
        background-color: ${theme.colors.blue500};
      `
  }
}

type ToastMessageContainerProps = {
  type?: ToastMessageType
  hasTitle: boolean
}

export const ToastMessageContainer = styled.div<ToastMessageContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  div {
    strong {
      color: ${({ theme }) => theme.colors.white};
    }

    p {
      margin-top: 4px;
      font-size: 16px;
      line-height: 24px;

      color: ${({ theme }) => theme.colors.white};
    }
  }

  & button {
    width: 43px;
    height: 16px;

    margin-left: 32px;

    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: ${({ theme }) => theme.colors.white};
  }

  ${props =>
    !props.hasTitle &&
    css`
      align-items: center;
    `}

  ${props => getToastMessageTypeStyle({ theme: props.theme, type: props.type })}
`
