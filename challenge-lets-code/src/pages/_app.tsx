import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { DefaultTheme, GlobalStyles } from '@/core/application/common/styles'
import { AppProvider } from '@/core/main/config/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
