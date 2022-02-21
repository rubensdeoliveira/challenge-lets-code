import React from 'react'
import { MdNotInterested } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyCancelIcon(props: MyIconProps) {
  return <MdNotInterested data-testid={props.name} {...props} />
}
