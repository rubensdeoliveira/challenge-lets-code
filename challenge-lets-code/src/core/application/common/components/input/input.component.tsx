import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { InputProps } from '@/core/application/common/components'
import { Container } from '@/core/application/common/components/input/styles'

export function Input({ name, defaultValue = '', ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
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
      data-testid="input-container"
      ref={inputRef}
      name={name}
      defaultValue={defaultValue}
      {...rest}
    />
  )
}
