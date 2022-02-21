import { useCallback, useMemo, useRef, useState } from 'react'
import { FormHandles } from '@unform/core'

import {
  IconButton,
  Input,
  InputArea,
  MyCancelIcon,
  MyChevronLeftIcon,
  MyChevronRightIcon,
  MyDeleteIcon,
  MyDoneIcon,
  MyEditIcon,
} from '@/core/application/common/components'
import { CardItemProps } from '@/core/application/initial/components'
import {
  CardItemContainer,
  CardItemFooter,
  CardItemHeader,
  CardItemForm,
} from '@/core/application/initial/components/cards/components/card-item/styles'
import { CardModel } from '@/core/domain/initial/entities'

export function CardItem({
  card,
  onChangeCardToNextPosition,
  onChangeCardToPreviousPosition,
  onDeleteCardItem,
  onUpdateCardItem,
}: CardItemProps) {
  const formRef = useRef<FormHandles>(undefined)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleChangeCardToNextPosition = useCallback(
    (card: CardModel) => {
      if (onChangeCardToNextPosition) {
        onChangeCardToNextPosition(card)
      }
    },
    [onChangeCardToNextPosition, card],
  )

  const handleChangeCardToPreviousPosition = useCallback(
    (card: CardModel) => {
      if (onChangeCardToPreviousPosition) {
        onChangeCardToPreviousPosition(card)
      }
    },
    [onChangeCardToPreviousPosition, card],
  )

  const handleDeleteCardItem = useCallback(
    (card: CardModel) => {
      if (onDeleteCardItem) {
        onDeleteCardItem(card)
      }
    },
    [onDeleteCardItem, card],
  )

  const handleSetEditMode = useCallback(() => {
    setEditMode(true)
  }, [card])

  const handleHeader = useMemo(
    () => (
      <>
        {editMode ? (
          <Input name="title" type="text" defaultValue={card.titulo} />
        ) : (
          <>
            <CardItemHeader>
              <h1>{card.titulo}</h1>
              <IconButton
                name="card-item-edit-button"
                icon={MyEditIcon}
                onClick={handleSetEditMode}
              />
            </CardItemHeader>
            <hr />
          </>
        )}
      </>
    ),
    [editMode, card],
  )

  const handleUpdateCardItem = useCallback(
    data => {
      if (onUpdateCardItem) {
        onUpdateCardItem(card, data.title, data.description)
      }
      setEditMode(false)
    },
    [onUpdateCardItem, card],
  )

  const handleContent = useMemo(
    () => (
      <>
        {editMode ? (
          <InputArea name="description" defaultValue={card.conteudo} />
        ) : (
          <p>{card.conteudo}</p>
        )}
      </>
    ),
    [editMode, card],
  )

  const handleFooter = useMemo(
    () => (
      <CardItemFooter>
        {editMode ? (
          <>
            <IconButton
              name="card-item-cancel-button"
              icon={MyCancelIcon}
              onClick={() => setEditMode(false)}
            />
            <IconButton
              type="submit"
              name="card-item-save-button"
              icon={MyDoneIcon}
            />
          </>
        ) : (
          <>
            <IconButton
              name="card-item-back-button"
              icon={MyChevronLeftIcon}
              onClick={() => handleChangeCardToPreviousPosition(card)}
            />
            <IconButton
              name="card-item-delete-button"
              icon={MyDeleteIcon}
              onClick={() => handleDeleteCardItem(card)}
            />
            <IconButton
              name="card-item-next-button"
              icon={MyChevronRightIcon}
              onClick={() => handleChangeCardToNextPosition(card)}
            />
          </>
        )}
      </CardItemFooter>
    ),
    [editMode, card],
  )

  return (
    <CardItemContainer>
      <CardItemForm ref={formRef} onSubmit={handleUpdateCardItem}>
        {handleHeader}
        {handleContent}
        {handleFooter}
      </CardItemForm>
    </CardItemContainer>
  )
}
