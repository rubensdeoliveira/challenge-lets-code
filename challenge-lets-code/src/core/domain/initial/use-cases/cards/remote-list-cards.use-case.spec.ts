import { internet } from 'faker'

import { HttpStatusCode } from '@/core/domain/common/constants'
import { UnexpectedError } from '@/core/domain/common/errors'
import {
  HttpClientSpy,
  mockHttpResponse,
} from '@/core/infra/common/gateways/http/mocks'
import { RemoteListCardsUseCase } from '@/core/domain/initial/use-cases'

type sutTypes = {
  sut: RemoteListCardsUseCase
  httpClient: HttpClientSpy
  endPoint: string
}

const makeSut = (): sutTypes => {
  const httpClient = new HttpClientSpy()
  httpClient.httpResponse = mockHttpResponse(HttpStatusCode.ok)
  const endPoint = internet.url()
  const sut = new RemoteListCardsUseCase(endPoint, httpClient)
  return {
    sut,
    endPoint,
    httpClient,
  }
}

describe('RemoteListCardsUseCase', () => {
  test('Should call HttpClient with correct protocol', async () => {
    const { sut, httpClient } = makeSut()
    await sut.list()
    expect(httpClient.httpRequest.method).toBe('get')
  })

  test('Should call HttpClient with correct url', async () => {
    const { sut, httpClient, endPoint } = makeSut()
    await sut.list()
    expect(httpClient.httpRequest.url).toBe(endPoint)
  })

  test('Should return a ok with cards if HttpClient returns List status code', async () => {
    const { sut, httpClient } = makeSut()
    const listCards = (httpClient.httpResponse = mockHttpResponse(
      HttpStatusCode.ok,
    ))
    const response = await sut.list()
    expect(response).toEqual(listCards.body)
  })

  test('Should return UnexpectedError if HttpClient returns other status code', async () => {
    const { sut, httpClient } = makeSut()
    httpClient.httpResponse = mockHttpResponse(HttpStatusCode.badRequest)
    const responsePromise = sut.list()
    await expect(responsePromise).rejects.toThrowError(UnexpectedError)
  })
})
