import { CardStatus } from '@/core/domain/initial/constants'

export type UpdateCardDTO = {
  id: string
  titulo: string
  conteudo: string
  lista: CardStatus
}
