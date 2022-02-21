import React from 'react'
import { MdDelete } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyDeleteIcon(props: MyIconProps) {
  return <MdDelete data-testid={props.name} {...props} />
}
