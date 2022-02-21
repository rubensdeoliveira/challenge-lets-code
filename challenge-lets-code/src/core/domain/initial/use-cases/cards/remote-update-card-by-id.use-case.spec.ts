import { datatype, internet } from 'faker'

import { HttpStatusCode } from '@/core/domain/common/constants'
import { UnexpectedError } from '@/core/domain/common/errors'
import {
  HttpClientSpy,
  mockHttpResponse,
} from '@/core/infra/common/gateways/http/mocks'
import { RemoteUpdateCardByIdUseCase } from '@/core/domain/initial/use-cases'
import { mockCardModel } from '@/core/domain/initial/mocks'

type sutTypes = {
  sut: RemoteUpdateCardByIdUseCase
  httpClient: HttpClientSpy
  endPoint: string
}

const makeSut = (): sutTypes => {
  const httpClient = new HttpClientSpy()
  httpClient.httpResponse = mockHttpResponse(HttpStatusCode.ok, mockCardModel())
  const endPoint = internet.url()
  const sut = new RemoteUpdateCardByIdUseCase(endPoint, httpClient)
  return {
    sut,
    endPoint,
    httpClient,
  }
}

describe('RemoteUpdateCardByIdUseCase', () => {
  test('Should call HttpClient with correct protocol', async () => {
    const { sut, httpClient } = makeSut()
    await sut.updateById(datatype.string(), mockCardModel())
    expect(httpClient.httpRequest.method).toBe('put')
  })

  test('Should call HttpClient with correct url', async () => {
    const { sut, httpClient, endPoint } = makeSut()
    const url = datatype.string()
    await sut.updateById(url, mockCardModel())
    expect(httpClient.httpRequest.url).toBe(`${endPoint}/${url}`)
  })

  test('Should call HttpClient with correct body', async () => {
    const { sut, httpClient } = makeSut()
    const request = mockCardModel()
    await sut.updateById(datatype.string(), request)
    expect(httpClient.httpRequest.body).toEqual(request)
  })

  test('Should return a updateByIdd card if HttpClient returns Updated stByIdatus code', async () => {
    const { sut, httpClient } = makeSut()
    const updateByIddCard = mockCardModel()
    httpClient.httpResponse = mockHttpResponse(
      HttpStatusCode.ok,
      updateByIddCard,
    )
    const response = await sut.updateById(datatype.string(), mockCardModel())
    expect(response).toEqual(updateByIddCard)
  })

  test('Should return UnexpectedError if HttpClient returns other status code', async () => {
    const { sut, httpClient } = makeSut()
    httpClient.httpResponse = mockHttpResponse(HttpStatusCode.badRequest)
    const responsePromise = sut.updateById(datatype.string(), mockCardModel())
    await expect(responsePromise).rejects.toThrowError(UnexpectedError)
  })
})
