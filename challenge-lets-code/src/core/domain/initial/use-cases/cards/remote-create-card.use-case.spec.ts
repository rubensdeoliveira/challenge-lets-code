import { internet } from 'faker'

import { HttpStatusCode } from '@/core/domain/common/constants'
import { UnexpectedError } from '@/core/domain/common/errors'
import {
  HttpClientSpy,
  mockHttpResponse,
} from '@/core/infra/common/gateways/http/mocks'
import { RemoteCreateCardUseCase } from '@/core/domain/initial/use-cases'
import { mockCardModel } from '@/core/domain/initial/mocks'

type sutTypes = {
  sut: RemoteCreateCardUseCase
  httpClient: HttpClientSpy
  endPoint: string
}

const makeSut = (): sutTypes => {
  const httpClient = new HttpClientSpy()
  httpClient.httpResponse = mockHttpResponse(
    HttpStatusCode.created,
    mockCardModel(),
  )
  const endPoint = internet.url()
  const sut = new RemoteCreateCardUseCase(endPoint, httpClient)
  return {
    sut,
    endPoint,
    httpClient,
  }
}

describe('RemoteCreateCardUseCase', () => {
  test('Should call HttpClient with correct protocol', async () => {
    const { sut, httpClient } = makeSut()
    await sut.create(mockCardModel())
    expect(httpClient.httpRequest.method).toBe('post')
  })

  test('Should call HttpClient with correct url', async () => {
    const { sut, httpClient, endPoint } = makeSut()
    await sut.create(mockCardModel())
    expect(httpClient.httpRequest.url).toBe(endPoint)
  })

  test('Should call HttpClient with correct body', async () => {
    const { sut, httpClient } = makeSut()
    const request = mockCardModel()
    await sut.create(request)
    expect(httpClient.httpRequest.body).toEqual(request)
  })

  test('Should return a created card if HttpClient returns Created status code', async () => {
    const { sut, httpClient } = makeSut()
    const createdCard = mockCardModel()
    httpClient.httpResponse = mockHttpResponse(
      HttpStatusCode.created,
      createdCard,
    )
    const response = await sut.create(mockCardModel())
    expect(response).toEqual(createdCard)
  })

  test('Should return UnexpectedError if HttpClient returns other status code', async () => {
    const { sut, httpClient } = makeSut()
    httpClient.httpResponse = mockHttpResponse(HttpStatusCode.badRequest)
    const responsePromise = sut.create(mockCardModel())
    await expect(responsePromise).rejects.toThrowError(UnexpectedError)
  })
})
