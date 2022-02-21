import { datatype } from 'faker'

import {
  IconButtonProps,
  MyCancelIcon,
} from '@/core/application/common/components'

export const mockIconButtonProps = (): IconButtonProps => ({
  name: datatype.string(),
  icon: MyCancelIcon,
})
