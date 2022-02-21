import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { DeleteCardByIdContract } from '@/core/domain/initial/contracts'
import { RemoteDeleteCardByIdUseCase } from '@/core/domain/initial/use-cases'

export const makeRemoteDeleteCardByIdUseCase = (): DeleteCardByIdContract =>
  new RemoteDeleteCardByIdUseCase(
    makeApiUrlHelper('/cards'),
    makeAxiosHttpClientGateway(),
  )
