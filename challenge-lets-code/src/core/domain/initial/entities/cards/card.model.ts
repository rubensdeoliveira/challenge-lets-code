import { CardStatus } from '@/core/domain/initial/constants'

export type CardModel = {
  id: string
  titulo: string
  conteudo: string
  lista: CardStatus
}
