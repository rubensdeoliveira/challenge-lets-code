import { HttpStatusCode } from '@/core/domain/common/constants'

export interface HttpClientContract<R = any> {
  request: (
    data: HttpClientContract.Input,
  ) => Promise<HttpClientContract.Output<R>>
}

export namespace HttpClientContract {
  export type Input = {
    url: string
    method: 'post' | 'get' | 'put' | 'delete'
    body?: any
    headers?: any
  }
  export type Output<T = any> = {
    statusCode: HttpStatusCode
    body?: T
  }
}
