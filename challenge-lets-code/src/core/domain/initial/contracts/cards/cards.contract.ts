import { CardModel } from '@/core/domain/initial/entities'
import { CreateCardDTO, UpdateCardDTO } from '@/core/domain/initial/dtos'

export interface CreateCardContract {
  create: (cardData: CreateCardDTO) => Promise<CreateCardContract.Output>
}

export namespace CreateCardContract {
  export type Output = CardModel
}

export interface ListCardsContract {
  list: () => Promise<ListCardsContract.Output>
}

export namespace ListCardsContract {
  export type Output = CardModel[]
}

export interface DeleteCardByIdContract {
  deleteById: (
    id: DeleteCardByIdContract.Input,
  ) => Promise<DeleteCardByIdContract.Output>
}

export namespace DeleteCardByIdContract {
  export type Input = string
  export type Output = CardModel
}

export interface UpdateCardByIdContract {
  updateById: (
    cardId: string,
    cardData: UpdateCardDTO,
  ) => Promise<UpdateCardByIdContract.Output>
}

export namespace UpdateCardByIdContract {
  export type Output = CardModel
}
