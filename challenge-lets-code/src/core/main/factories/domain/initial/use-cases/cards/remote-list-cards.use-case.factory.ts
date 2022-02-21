import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { ListCardsContract } from '@/core/domain/initial/contracts'
import { RemoteListCardsUseCase } from '@/core/domain/initial/use-cases'

export const makeRemoteListCardsUseCase = (): ListCardsContract =>
  new RemoteListCardsUseCase(
    makeApiUrlHelper('/cards'),
    makeAxiosHttpClientGateway(),
  )
