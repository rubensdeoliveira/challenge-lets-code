import { random } from 'faker'

import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'

export const mockHttpResponse = <BodyType = any>(
  statusCode: HttpStatusCode = HttpStatusCode.ok,
  body: BodyType = random.objectElement<BodyType>(),
): HttpClientContract.Output => ({
  body,
  statusCode,
})
