import 'styled-components'

import { ThemeModel } from '@/core/application/common/styles'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
