import React, { useCallback, useMemo } from 'react'

import {
  CardsContainer,
  CardsColumnItemContainer,
  CardsItemsContainer,
} from '@/core/application/initial/components/cards/styles'
import {
  CardItem,
  CardsProps,
  CardsItemsProps,
} from '@/core/application/initial/components'
import { CardModel } from '@/core/domain/initial/entities'

export function Cards({
  items,
  onChangeCardToNextPosition,
  onChangeCardToPreviousPosition,
  onDeleteCardItem,
  onUpdateCardItem,
}: CardsProps) {
  const handleCardItemsContainer = useCallback(
    (cards: CardModel[]) => (
      <CardsItemsContainer>
        {cards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            onChangeCardToNextPosition={onChangeCardToNextPosition}
            onChangeCardToPreviousPosition={onChangeCardToPreviousPosition}
            onDeleteCardItem={onDeleteCardItem}
            onUpdateCardItem={onUpdateCardItem}
          />
        ))}
      </CardsItemsContainer>
    ),
    [
      onChangeCardToNextPosition,
      onChangeCardToPreviousPosition,
      onDeleteCardItem,
    ],
  )

  const handleCardsColumnItem = useCallback(
    ({ title, cards }: CardsItemsProps) => (
      <CardsColumnItemContainer>
        <h1>{title}</h1>
        <hr />
        {handleCardItemsContainer(cards)}
      </CardsColumnItemContainer>
    ),
    [],
  )

  const handleCardsColumns = useMemo(() => {
    if (!items || !items.length) {
      return undefined
    }
    return (
      <>
        {items.map(item => (
          <React.Fragment key={item.title}>
            {handleCardsColumnItem(item)}
          </React.Fragment>
        ))}
      </>
    )
  }, [items])

  return <CardsContainer>{handleCardsColumns}</CardsContainer>
}
