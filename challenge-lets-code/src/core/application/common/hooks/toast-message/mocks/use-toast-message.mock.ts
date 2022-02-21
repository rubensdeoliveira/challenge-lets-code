import { ToastMessageContextData } from '@/core/application/common/hooks'

export const mockToastMessageContextData = (): ToastMessageContextData => ({
  addToast: () => {
    return undefined
  },
  removeToast: () => {
    return undefined
  },
})
