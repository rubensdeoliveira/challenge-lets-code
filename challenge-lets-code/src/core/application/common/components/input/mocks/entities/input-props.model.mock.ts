import { datatype } from 'faker'

import { InputProps } from '@/core/application/common/components'

export const mockInputProps = (): InputProps => ({
  name: datatype.string(),
  defaultValue: datatype.string(),
})
