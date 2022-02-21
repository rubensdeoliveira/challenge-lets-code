import { datatype } from 'faker'

import { ListEntitiesModel } from '@/core/domain/common/entities'

export const mockListEntitiesModel = <EntityType>(
  results: EntityType[] = [],
): ListEntitiesModel<EntityType> => ({
  results,
  limit: datatype.number(),
  number_of_page_results: datatype.number(),
  number_of_total_results: datatype.number(),
  offset: datatype.number(),
  total_pages: datatype.number(),
})
