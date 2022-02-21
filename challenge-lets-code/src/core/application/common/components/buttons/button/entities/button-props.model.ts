import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { ButtonType } from '@/core/application/common/components'

export type ButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  buttonType?: ButtonType
}

export type ButtonPropsWithChildren = PropsWithChildren<ButtonProps>
