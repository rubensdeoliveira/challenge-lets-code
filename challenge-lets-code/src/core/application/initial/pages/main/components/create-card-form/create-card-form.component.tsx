import { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'

import { Button, Input } from '@/core/application/common/components'
import { CreateCardFormContainer } from '@/core/application/initial/pages/main/components/create-card-form/styles'
import {
  CreateCardFormProps,
  CreateCardFormData,
} from '@/core/application/initial/pages/main/components'

export function CreateCardForm({ onCreateCard }: CreateCardFormProps) {
  const formRef = useRef<FormHandles>(undefined)

  const handleSubmitForm = useCallback(
    async (data: CreateCardFormData) => {
      if (onCreateCard) {
        onCreateCard(data)
      }
      formRef.current.reset()
    },
    [onCreateCard],
  )

  return (
    <CreateCardFormContainer
      data-testid={'form-justification'}
      onSubmit={handleSubmitForm}
      ref={formRef}
    >
      <Input name="titulo" placeholder="Adicione um título" />
      <Input name="conteudo" placeholder="Adicione uma descriçāo" />
      <Button name="create-card-form-button" label="Adicionar" />
    </CreateCardFormContainer>
  )
}
