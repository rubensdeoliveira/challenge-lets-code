import styled from 'styled-components'
import { Form } from '@unform/web'

export const CreateCardFormContainer = styled(Form)`
  width: 100%;
  max-width: 400px;
  gap: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    margin-top: 10px;
  }
`
