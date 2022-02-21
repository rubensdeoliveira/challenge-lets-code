import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;

  > div + div {
    border-left: 2px solid black;
  }
`

export const CardsColumnItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  h1 {
    text-align: center;
  }

  hr {
    margin: 0 10px;
  }
`

export const CardsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 50px;

  > div + div {
    margin-top: 20px;
  }
`
