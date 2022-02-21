import { ListCardsContract } from '@/core/domain/initial/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'
import { UnexpectedError } from '@/core/domain/common/errors'

export class RemoteListCardsUseCase implements ListCardsContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<ListCardsContract.Output>,
  ) {}

  async list(): Promise<ListCardsContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
