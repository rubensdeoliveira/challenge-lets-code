import React from 'react'
import { datatype } from 'faker'
import { screen } from '@testing-library/react'

import {
  Button,
  ButtonProps,
  ButtonType,
} from '@/core/application/common/components'
import { mockButtonProps } from '@/core/application/common/components/buttons/button/mocks'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'

const makeSut = async (
  props: ButtonProps,
  hasChildren: boolean = false,
): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => (
    <Button {...props}>
      {hasChildren && (
        <p data-testid={`${props.name}-children`}>{datatype.uuid()}</p>
      )}
    </Button>
  ))

describe('Button Component', () => {
  describe('ButtonContainer', () => {
    describe('Behavior', () => {
      test('Should render correct children', async () => {
        const props = mockButtonProps()
        await makeSut(props, true)
        screen.getByTestId(`${props.name}-children`)
      })

      test('Should not render children if children is not provided', async () => {
        const props = mockButtonProps()
        await makeSut(props, false)
        const children = screen.queryByTestId(`${props.name}-children`)
        expect(children).not.toBeInTheDocument()
      })

      test('Should render button with children if children and label are provided', async () => {
        const props = mockButtonProps()
        props.label = datatype.string()
        await makeSut(props, true)
        const container = screen.getByTestId(`${props.name}`)
        expect(container.textContent).not.toBe(props.label)
      })

      test('Should render button with label if children not provided and label provided', async () => {
        const props = mockButtonProps()
        props.label = datatype.string()
        await makeSut(props, false)
        const container = screen.queryByTestId(`${props.name}`)
        expect(container.textContent).toBe(props.label)
      })
    })

    describe('Styles', () => {
      test('Should render ButtonContainer with correct styles if buttonType is not provided', async () => {
        const props = mockButtonProps()
        delete props.buttonType
        const { theme } = await makeSut(props)
        const button = screen.getByTestId(`${props.name}`)
        expect(button).toHaveStyle(`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 51px;
          width: 200px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 1.8rem;
          line-height: 2.8rem;
          background: ${theme.colors.blue500};
          color: ${theme.colors.white};
          border: 0;
        `)
      })

      test('Should render ButtonContainer with correct styles if button is primary', async () => {
        const props = mockButtonProps()
        props.buttonType = ButtonType.Primary
        const { theme } = await makeSut(props)
        const button = screen.getByTestId(`${props.name}`)
        expect(button).toHaveStyle(`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 51px;
          width: 200px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 1.8rem;
          line-height: 2.8rem;
          background: ${theme.colors.blue500};
          color: ${theme.colors.white};
          border: 0;
        `)
      })

      test('Should render ButtonContainer with correct styles if button is secondary', async () => {
        const props = mockButtonProps()
        props.buttonType = ButtonType.Secondary
        const { theme } = await makeSut(props)
        const button = screen.getByTestId(`${props.name}`)
        expect(button).toHaveStyle(`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 51px;
          width: 200px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 1.8rem;
          line-height: 2.8rem;
          background: transparent;
          color: ${theme.colors.blue500};
          border: 2px solid ${theme.colors.blue500};
        `)
      })
    })
  })
})
