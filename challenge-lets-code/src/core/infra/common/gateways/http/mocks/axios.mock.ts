import axios from 'axios'

import { HttpClientContract } from '@/core/domain/common/contracts'
import { mockHttpResponse } from '@/core/infra/common/gateways/http/mocks'

export const mockAxios = (
  httpResponse: HttpClientContract.Output = mockHttpResponse(),
): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue({
    data: httpResponse.body,
    status: httpResponse.statusCode,
  })
  return mockedAxios
}
