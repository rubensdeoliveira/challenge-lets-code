import { internet, datatype } from 'faker'

import { HttpStatusCode } from '@/core/domain/common/constants'
import { UnexpectedError } from '@/core/domain/common/errors'
import {
  HttpClientSpy,
  mockHttpResponse,
} from '@/core/infra/common/gateways/http/mocks'
import { RemoteDeleteCardByIdUseCase } from '@/core/domain/initial/use-cases'

type sutTypes = {
  sut: RemoteDeleteCardByIdUseCase
  httpClient: HttpClientSpy
  endPoint: string
}

const makeSut = (): sutTypes => {
  const httpClient = new HttpClientSpy()
  httpClient.httpResponse = mockHttpResponse(
    HttpStatusCode.ok,
    datatype.string(),
  )
  const endPoint = internet.url()
  const sut = new RemoteDeleteCardByIdUseCase(endPoint, httpClient)
  return {
    sut,
    endPoint,
    httpClient,
  }
}

describe('RemoteDeleteCardByIdUseCase', () => {
  test('Should call HttpClient with correct protocol', async () => {
    const { sut, httpClient } = makeSut()
    await sut.deleteById(datatype.string())
    expect(httpClient.httpRequest.method).toBe('delete')
  })

  test('Should call HttpClient with correct url', async () => {
    const { sut, httpClient, endPoint } = makeSut()
    const id = datatype.string()
    await sut.deleteById(id)
    expect(httpClient.httpRequest.url).toBe(`${endPoint}/${id}`)
  })

  test('Should return a ok if HttpClient returns Deleted code', async () => {
    const { sut, httpClient } = makeSut()
    const deleteByIdCard = datatype.string()
    httpClient.httpResponse = mockHttpResponse(
      HttpStatusCode.ok,
      deleteByIdCard,
    )
    const response = await sut.deleteById(datatype.string())
    expect(response).toEqual(deleteByIdCard)
  })

  test('Should return UnexpectedError if HttpClient returns other status code', async () => {
    const { sut, httpClient } = makeSut()
    httpClient.httpResponse = mockHttpResponse(HttpStatusCode.badRequest)
    const responsePromise = sut.deleteById(datatype.string())
    await expect(responsePromise).rejects.toThrowError(UnexpectedError)
  })
})
