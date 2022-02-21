import React from 'react'

import { MainPage } from '@/core/application/initial/pages'
import {
  makeRemoteCreateCardUseCase,
  makeRemoteDeleteCardByIdUseCase,
  makeRemoteListCardsUseCase,
  makeRemoteUpdateCardByIdUseCase,
} from '@/core/main/factories/domain/initial/use-cases'

export function MainPageFactory() {
  return (
    <MainPage
      listCardsUseCase={makeRemoteListCardsUseCase()}
      createCardByIdUseCase={makeRemoteCreateCardUseCase()}
      updateCardByIdUseCase={makeRemoteUpdateCardByIdUseCase()}
      deleteCardByIdUseCase={makeRemoteDeleteCardByIdUseCase()}
    />
  )
}
