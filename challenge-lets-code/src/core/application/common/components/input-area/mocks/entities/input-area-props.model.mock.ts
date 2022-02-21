import { datatype } from 'faker'

import { InputAreaProps } from '@/core/application/common/components'

export const mockInputAreaProps = (): InputAreaProps => ({
  name: datatype.string(),
  defaultValue: datatype.string(),
})
