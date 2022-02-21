import { CardsItemsProps } from '@/core/application/initial/components'
import { CardModel } from '@/core/domain/initial/entities'

export type CardsProps = {
  items: CardsItemsProps[]
  onChangeCardToNextPosition?: (card: CardModel) => void
  onChangeCardToPreviousPosition?: (card: CardModel) => void
  onDeleteCardItem?: (card: CardModel) => void
  onUpdateCardItem?: (
    card: CardModel,
    title: string,
    description: string,
  ) => void
}
