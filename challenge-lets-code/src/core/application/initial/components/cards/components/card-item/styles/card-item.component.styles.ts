import { Form } from '@unform/web'
import styled from 'styled-components'

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue500};

  p {
    height: 300px;
    overflow: auto;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  hr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`

export const CardItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  h1 {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    width: 20%;
  }
`

export const CardItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const CardItemForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
