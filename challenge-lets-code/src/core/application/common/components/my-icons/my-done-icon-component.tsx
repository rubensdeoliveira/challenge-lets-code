import React from 'react'
import { MdDone } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyDoneIcon(props: MyIconProps) {
  return <MdDone data-testid={props.name} {...props} />
}
