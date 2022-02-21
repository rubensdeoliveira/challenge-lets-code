import React from 'react'
import { MdChevronRight } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export function MyChevronRightIcon(props: MyIconProps) {
  return <MdChevronRight data-testid={props.name} {...props} />
}
