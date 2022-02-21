import { useCallback, useEffect, useState } from 'react'

import { MainPageWrapper } from '@/core/application/initial/pages/main/styles'
import { Cards, CardsItemsProps } from '@/core/application/initial/components'
import { MainPageProps } from '@/core/application/initial/pages'
import { CardStatus } from '@/core/domain/initial/constants'
import { CardModel } from '@/core/domain/initial/entities'
import { useToastMessage } from '@/core/application/common/hooks'
import { ToastMessageType } from '@/core/application/common/components'
import { CreateCardForm, CreateCardFormData } from './components'

export function MainPage({
  createCardByIdUseCase,
  listCardsUseCase,
  updateCardByIdUseCase,
  deleteCardByIdUseCase,
}: MainPageProps) {
  const [cardItems, setCardItems] = useState<CardsItemsProps[]>([])
  const { addToast } = useToastMessage()

  useEffect(() => {
    handleListCards()
  }, [])

  const handleListCards = useCallback(async (): Promise<void> => {
    try {
      const cardsList = await listCardsUseCase.list()
      const cardItemsList: CardsItemsProps[] = Object.entries(CardStatus).map(
        ([_, value]) => ({
          title: value,
          cards: cardsList?.length
            ? cardsList.filter(card => card.lista === value)
            : [],
        }),
      )
      setCardItems(cardItemsList)
    } catch {
      addToast({
        title: 'Nāo foi possível carregar os cards',
        type: ToastMessageType.Error,
      })
    }
  }, [])

  const handleChangeCardToNextPosition = useCallback(
    async (card: CardModel) => {
      try {
        if (card.lista === CardStatus.ToDo || card.lista === CardStatus.Doing) {
          await updateCardByIdUseCase.updateById(card.id, {
            ...card,
            lista:
              card.lista === CardStatus.ToDo
                ? CardStatus.Doing
                : CardStatus.Done,
          })
          handleListCards()
        }
      } catch {
        addToast({
          title: 'Nāo foi possível alterar a posiçāo do card',
          type: ToastMessageType.Error,
        })
      }
    },
    [handleListCards],
  )

  const handleChangeCardToPreviousPosition = useCallback(
    async (card: CardModel) => {
      try {
        if (card.lista === CardStatus.Doing || card.lista === CardStatus.Done) {
          await updateCardByIdUseCase.updateById(card.id, {
            ...card,
            lista:
              card.lista === CardStatus.Doing
                ? CardStatus.ToDo
                : CardStatus.Doing,
          })
          handleListCards()
        }
      } catch {
        addToast({
          title: 'Nāo foi possível alterar a posiçāo do card',
          type: ToastMessageType.Error,
        })
      }
    },
    [handleListCards],
  )

  const handleDeleteCardItem = useCallback(
    async (card: CardModel) => {
      try {
        await deleteCardByIdUseCase.deleteById(card.id)
        handleListCards()
      } catch {
        addToast({
          title: 'Nāo foi possível excluir o card',
          type: ToastMessageType.Error,
        })
      }
    },
    [handleListCards],
  )

  const handleUpdateCardItem = useCallback(
    async (card: CardModel, title: string, description: string) => {
      try {
        if (title && description) {
          await updateCardByIdUseCase.updateById(card.id, {
            ...card,
            titulo: title,
            conteudo: description,
          })
          handleListCards()
        }
      } catch {
        addToast({
          title: 'Nāo foi possível alterar os card',
          type: ToastMessageType.Error,
        })
      }
    },
    [handleListCards],
  )

  const handleCreateCard = useCallback(
    async (data: CreateCardFormData) => {
      try {
        await createCardByIdUseCase.create({
          titulo: data.titulo,
          conteudo: data.conteudo,
          lista: CardStatus.ToDo,
        })
        handleListCards()
        addToast({
          title: 'Card adicionado com sucesso!',
          type: ToastMessageType.Success,
        })
      } catch (err) {
        addToast({
          title: 'Nāo foi possível adicionar um card novo',
          type: ToastMessageType.Error,
        })
      }
    },
    [handleListCards],
  )

  return (
    <>
      <CreateCardForm onCreateCard={handleCreateCard} />
      <MainPageWrapper>
        <Cards
          items={cardItems}
          onChangeCardToNextPosition={handleChangeCardToNextPosition}
          onChangeCardToPreviousPosition={handleChangeCardToPreviousPosition}
          onDeleteCardItem={handleDeleteCardItem}
          onUpdateCardItem={handleUpdateCardItem}
        />
      </MainPageWrapper>
    </>
  )
}
