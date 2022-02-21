import React from 'react'

import { ToastMessageModel } from '@/core/application/common/components'
import { Container } from '@/core/application/common/components/toast-message/styles'
import { ToastMessage } from '@/core/application/common/components/toast-message/components'

export type ToastContainerProps = {
  messages: ToastMessageModel[]
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
}: ToastContainerProps) => {
  return (
    <Container
      visible={messages && messages.length > 0}
      data-testid="toast-message-container"
    >
      {messages?.map(message => (
        <ToastMessage key={message.id} message={message} />
      ))}
    </Container>
  )
}
