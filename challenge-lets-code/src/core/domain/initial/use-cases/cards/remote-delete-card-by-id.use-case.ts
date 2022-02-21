import { DeleteCardByIdContract } from '@/core/domain/initial/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'
import { UnexpectedError } from '@/core/domain/common/errors'

export class RemoteDeleteCardByIdUseCase implements DeleteCardByIdContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<DeleteCardByIdContract.Output>,
  ) {}

  async deleteById(cardId: string): Promise<DeleteCardByIdContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${cardId}`,
      method: 'delete',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
