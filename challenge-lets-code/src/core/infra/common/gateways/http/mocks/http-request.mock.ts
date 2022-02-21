import { internet, random } from 'faker'

import { HttpClientContract } from '@/core/domain/common/contracts'

export const mockHttpRequest = (): HttpClientContract.Input => ({
  url: internet.url(),
  method: 'post',
  body: random.objectElement(),
  headers: random.objectElement(),
})
