import React, { useEffect } from 'react'

import { ToastMessageType } from '@/core/application/common/components'
import { ToastMessageContainer } from '@/core/application/common/components/toast-message/components/toast/styles'
import { ToastMessageProps } from '@/core/application/common/components/toast-message/components'
import { useToastMessage } from '@/core/application/common/hooks'

export const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
}: ToastMessageProps) => {
  const { removeToast } = useToastMessage()
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, message.id])

  return (
    <ToastMessageContainer
      type={message.type || ToastMessageType.Info}
      hasTitle={Boolean(message.title)}
      data-testid={`toast-message-container-${message.id}`}
    >
      <div data-testid={`toast-message-wrap-${message.id}`}>
        {message.title && (
          <strong data-testid={`toast-message-title-${message.id}`}>
            {message.title}
          </strong>
        )}
        {message.description && (
          <p data-testid={`toast-message-description-${message.id}`}>
            {message.description}
          </p>
        )}
      </div>
    </ToastMessageContainer>
  )
}
