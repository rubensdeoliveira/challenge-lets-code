import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { UpdateCardByIdContract } from '@/core/domain/initial/contracts'
import { RemoteUpdateCardByIdUseCase } from '@/core/domain/initial/use-cases'

export const makeRemoteUpdateCardByIdUseCase = (): UpdateCardByIdContract =>
  new RemoteUpdateCardByIdUseCase(
    makeApiUrlHelper('/cards'),
    makeAxiosHttpClientGateway(),
  )
