import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { CreateCardContract } from '@/core/domain/initial/contracts'
import { RemoteCreateCardUseCase } from '@/core/domain/initial/use-cases'

export const makeRemoteCreateCardUseCase = (): CreateCardContract =>
  new RemoteCreateCardUseCase(
    makeApiUrlHelper('/cards'),
    makeAxiosHttpClientGateway(),
  )
