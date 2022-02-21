import { CardModel } from '@/core/domain/initial/entities'

export type CardItemProps = {
  card: CardModel
  onChangeCardToNextPosition?: (card: CardModel) => void
  onChangeCardToPreviousPosition?: (card: CardModel) => void
  onDeleteCardItem?: (card: CardModel) => void
  onUpdateCardItem?: (
    card: CardModel,
    title: string,
    description: string,
  ) => void
}
