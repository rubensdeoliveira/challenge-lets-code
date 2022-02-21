import { datatype } from 'faker'

import { CardModel } from '@/core/domain/initial/entities'
import { mockCardStatus } from '@/core/domain/initial/mocks/constants'

export const mockCardModel = (): CardModel => ({
  id: datatype.uuid(),
  conteudo: datatype.string(),
  lista: mockCardStatus(),
  titulo: datatype.string(),
})
