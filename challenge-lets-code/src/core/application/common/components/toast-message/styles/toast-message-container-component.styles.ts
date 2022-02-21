import styled, { css } from 'styled-components'

type ContainerProps = {
  visible: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  padding: 30px;
  overflow: hidden;
  display: none;
  z-index: 100;
  width: 50%;

  ${props =>
    props.visible &&
    css`
      display: block;
    `}
`
