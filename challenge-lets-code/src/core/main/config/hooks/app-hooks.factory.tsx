import React from 'react'

import { ToastMessageProvider } from '@/core/application/common/hooks'

type AppProviderProps = {
  children?: JSX.Element
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => <ToastMessageProvider>{children}</ToastMessageProvider>
