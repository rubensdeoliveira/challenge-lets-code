import { UpdateCardByIdContract } from '@/core/domain/initial/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'
import { UnexpectedError } from '@/core/domain/common/errors'
import { UpdateCardDTO } from '@/core/domain/initial/dtos'

export class RemoteUpdateCardByIdUseCase implements UpdateCardByIdContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<UpdateCardByIdContract.Output>,
  ) {}

  async updateById(
    cardId: string,
    cardData: UpdateCardDTO,
  ): Promise<UpdateCardByIdContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${cardId}`,
      method: 'put',
      body: cardData,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
