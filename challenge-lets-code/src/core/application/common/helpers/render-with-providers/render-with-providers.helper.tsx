import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, act } from '@testing-library/react'

import { RenderWithProvidersProps } from '@/core/application/common/helpers'
import { DefaultTheme } from '@/core/application/common/styles'

export const RenderWithProviders = async (
  Component: React.FC,
): Promise<RenderWithProvidersProps> => {
  await act(async () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Component />
      </ThemeProvider>,
    )
  })
  return {
    theme: DefaultTheme,
  }
}
