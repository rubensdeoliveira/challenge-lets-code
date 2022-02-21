import React from 'react'
import { MdEdit } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyEditIcon(props: MyIconProps) {
  return <MdEdit data-testid={props.name} {...props} />
}
