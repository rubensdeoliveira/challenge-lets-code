import axios from 'axios'
import { datatype } from 'faker'

import { AxiosHttpClientGateway } from '@/core/infra/common/gateways'
import {
  mockAxios,
  mockHttpRequest,
  mockHttpResponse,
} from '@/core/infra/common/gateways/http/mocks'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClientGateway
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (token: string): SutTypes => {
  const sut = new AxiosHttpClientGateway(token)
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClientGateway', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const token = datatype.string()
    const { sut, mockedAxios } = makeSut(token)
    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: { ...request.headers, Authorization: `Bearer ${token}` },
      method: request.method,
    })
  })

  test('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut(datatype.string())
    const httpResponse = await sut.request(mockHttpRequest())
    const axiosResponse = await mockedAxios.request.mock.results[0].value
    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    })
  })

  test('Should return correct error', () => {
    const { sut, mockedAxios } = makeSut(datatype.string())
    const rejectedResponse = mockHttpResponse()
    mockedAxios.request.mockRejectedValueOnce({
      response: {
        status: rejectedResponse.statusCode,
        data: rejectedResponse.body,
      },
    })
    const promise = sut.request(mockHttpRequest())
    expect(promise).toEqual(mockedAxios.request.mock.results[0].value)
  })
})
