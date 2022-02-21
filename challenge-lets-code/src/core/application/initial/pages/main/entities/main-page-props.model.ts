import {
  CreateCardContract,
  DeleteCardByIdContract,
  ListCardsContract,
  UpdateCardByIdContract,
} from '@/core/domain/initial/contracts'

export type MainPageProps = {
  createCardByIdUseCase: CreateCardContract
  listCardsUseCase: ListCardsContract
  updateCardByIdUseCase: UpdateCardByIdContract
  deleteCardByIdUseCase: DeleteCardByIdContract
}
