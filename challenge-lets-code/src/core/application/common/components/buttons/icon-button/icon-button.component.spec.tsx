import React from 'react'
import { screen } from '@testing-library/react'

import {
  IconButton,
  IconButtonProps,
} from '@/core/application/common/components'
import { mockIconButtonProps } from '@/core/application/common/components/buttons/icon-button/mocks'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'

const makeSut = async (
  props: IconButtonProps,
): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => <IconButton {...props} />)

describe('IconButton Component', () => {
  describe('IconButtonContainer', () => {
    describe('Behavior', () => {
      test('Should render icon', async () => {
        const props = mockIconButtonProps()
        await makeSut(props)
        screen.getByTestId('icon-button-icon')
      })
    })

    describe('Styles', () => {
      test('Should render IconButtonContainer with correct styles', async () => {
        const props = mockIconButtonProps()
        await makeSut(props)
        const button = screen.getByTestId(`${props.name}`)
        expect(button).toHaveStyle(`
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
        `)
      })

      test('Should render icon with correct styles', async () => {
        const props = mockIconButtonProps()
        const { theme } = await makeSut(props)
        const icon = screen.getByTestId('icon-button-icon')
        expect(icon).toHaveAttribute('color', theme.colors.white)
        expect(icon).toHaveAttribute('height', '24')
        expect(icon).toHaveAttribute('width', '24')
      })
    })
  })
})
