import React from 'react'
import { MdChevronLeft } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyChevronLeftIcon(props: MyIconProps) {
  return <MdChevronLeft data-testid={props.name} {...props} />
}
