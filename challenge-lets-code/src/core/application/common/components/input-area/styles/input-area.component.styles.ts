import styled from 'styled-components'

export const Container = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  padding: 0 1.2rem;
`
