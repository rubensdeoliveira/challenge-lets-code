import axios, { AxiosResponse } from 'axios'

import { HttpClientContract } from '@/core/domain/common/contracts'

export class AxiosHttpClientGateway implements HttpClientContract {
  constructor(private readonly token: string) {}

  async request(
    data: HttpClientContract.Input,
  ): Promise<HttpClientContract.Output> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: { Authorization: `Bearer ${this.token}`, ...data.headers },
      })
    } catch (err: any) {
      axiosResponse = err.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
