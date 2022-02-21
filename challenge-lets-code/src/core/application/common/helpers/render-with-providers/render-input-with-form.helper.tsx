import React from 'react'
import { render, act } from '@testing-library/react'
import { Form } from '@unform/web'
import { ThemeProvider } from 'styled-components'

import { DefaultTheme } from '@/core/application/common/styles'

export const RenderWithForm = async (
  Component: React.FC,
  onSubmit: (dats: any) => void = () => {
    return undefined
  },
): Promise<void> => {
  await act(async () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Form data-testid="form-to-test" onSubmit={onSubmit}>
          <Component />
        </Form>
      </ThemeProvider>,
    )
  })
}
