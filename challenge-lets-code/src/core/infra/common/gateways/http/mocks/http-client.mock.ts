import { HttpClientContract } from '@/core/domain/common/contracts'
import { mockHttpResponse } from '@/core/infra/common/gateways/http/mocks'

export class HttpClientSpy implements HttpClientContract {
  httpRequest: HttpClientContract.Input
  httpResponse: HttpClientContract.Output = mockHttpResponse()

  async request(
    data: HttpClientContract.Input,
  ): Promise<HttpClientContract.Output> {
    this.httpRequest = data
    return this.httpResponse
  }
}
