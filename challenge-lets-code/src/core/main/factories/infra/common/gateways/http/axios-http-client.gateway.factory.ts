import { AxiosHttpClientGateway } from '@/core/infra/common/gateways'

export const makeAxiosHttpClientGateway = (): AxiosHttpClientGateway =>
  new AxiosHttpClientGateway(process.env.NEXT_PUBLIC_API_TOKEN ?? '')
