import { ListEntitiesDTO } from '@/core/domain/common/dtos'

export interface MapFilterToUrlParamsContract {
  map: (
    data: MapFilterToUrlParamsContract.Input,
  ) => MapFilterToUrlParamsContract.Output
}

export namespace MapFilterToUrlParamsContract {
  export type Input = ListEntitiesDTO
  export type Output = string
}
