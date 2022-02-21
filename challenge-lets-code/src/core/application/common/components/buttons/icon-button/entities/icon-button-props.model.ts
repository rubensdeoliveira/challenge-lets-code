import { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export type IconButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
  name: string
  icon: React.ComponentType<IconBaseProps>
}
