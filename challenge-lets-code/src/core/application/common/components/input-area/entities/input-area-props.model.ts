import { TextareaHTMLAttributes } from 'react'

export type InputAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  defaultValue?: string
}
