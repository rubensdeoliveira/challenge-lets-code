import { CardStatus } from '@/core/domain/initial/constants'

export type CreateCardDTO = {
  titulo: string
  conteudo: string
  lista: CardStatus
}
