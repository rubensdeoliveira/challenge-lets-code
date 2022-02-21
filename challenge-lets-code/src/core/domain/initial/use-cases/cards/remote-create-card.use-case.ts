import { CreateCardContract } from '@/core/domain/initial/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'
import { UnexpectedError } from '@/core/domain/common/errors'
import { CreateCardDTO } from '@/core/domain/initial/dtos'

export class RemoteCreateCardUseCase implements CreateCardContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<CreateCardContract.Output>,
  ) {}

  async create(cardData: CreateCardDTO): Promise<CreateCardContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: cardData,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
