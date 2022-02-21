import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { InputAreaProps } from '@/core/application/common/components'
import { Container } from '@/core/application/common/components/input-area/styles'

export function InputArea({
  name,
  defaultValue = '',
  ...rest
}: InputAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [])

  return (
    <Container
      ref={inputRef}
      name={name}
      data-testid="input-area-container"
      defaultValue={defaultValue}
      {...rest}
    />
  )
}
