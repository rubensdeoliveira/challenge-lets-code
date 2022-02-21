import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  PropsWithChildren,
} from 'react'
import {
  ToastContainer,
  ToastMessageModel,
} from '@/core/application/common/components'
import {
  ToastMessageContextData,
  ToastMessageProviderProps,
} from '@/core/application/common/hooks'
import { v4 } from 'uuid'

const ToastMessageContext = createContext<ToastMessageContextData>({
  addToast: undefined,
  removeToast: undefined,
})

export type ToastMessageProviderPropsWithChildren =
  PropsWithChildren<ToastMessageProviderProps>

const ToastMessageProvider: React.FC<ToastMessageProviderPropsWithChildren> = ({
  children,
}: ToastMessageProviderPropsWithChildren) => {
  const [messages, setMessages] = useState<ToastMessageModel[]>([])
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageModel, 'id'>) => {
      const toast = {
        id: v4(),
        type,
        title,
        description,
      }
      setMessages(oldMessages => [...oldMessages, toast])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id))
  }, [])

  return (
    <ToastMessageContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastMessageContext.Provider>
  )
}

const useToastMessage = (): ToastMessageContextData => {
  const context = useContext(ToastMessageContext)

  if (!context) {
    throw new Error(
      'useToastMessage must be used within a ToastMessageProvider',
    )
  }

  return context
}

export { ToastMessageProvider, useToastMessage }
