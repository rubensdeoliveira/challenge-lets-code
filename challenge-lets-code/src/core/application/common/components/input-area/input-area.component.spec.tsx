import { screen } from '@testing-library/react'
import { datatype } from 'faker'

import { InputArea, InputAreaProps } from '@/core/application/common/components'
import { RenderWithForm } from '@/core/application/common/helpers'
import { mockInputAreaProps } from '@/core/application/common/components/input-area/mocks'

const makeSut = async (
  param: InputAreaProps,
  onSubmit: (data: any) => void = jest.fn(),
): Promise<void> => {
  await RenderWithForm(() => <InputArea {...param} />, onSubmit)
}

describe('InputArea', () => {
  describe('General behaviour', () => {
    test('Should render input', async () => {
      await makeSut(mockInputAreaProps())
      screen.getByTestId(`input-area-container`)
    })
  })

  describe('Styles', () => {
    test('Should render input type text styles if input type is not provided', async () => {
      await makeSut(mockInputAreaProps())
      const container = screen.getByTestId(`input-area-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(51,51,51,0.2);
        height: 100%;
        width: 100%;
        padding: 0 1.2rem;
      `)
    })
  })

  describe('Placeholder', () => {
    describe('Placeholder', () => {
      test('Should render input with placeholder if placeholder is provided', async () => {
        const inputAreaProps = mockInputAreaProps()
        inputAreaProps.placeholder = datatype.string()
        await makeSut(inputAreaProps)
        const inputComponent = screen.getByTestId(`input-area-container`)
        expect(inputComponent).toHaveAttribute(
          'placeholder',
          inputAreaProps.placeholder,
        )
      })

      test('Should render input without placeholder if placeholder is not provided', async () => {
        const inputAreaProps = mockInputAreaProps()
        delete inputAreaProps.placeholder
        await makeSut(inputAreaProps)
        const inputComponent = screen.getByTestId(`input-area-container`)
        expect(inputComponent).not.toHaveAttribute('placeholder')
      })
    })
  })

  describe('Default value', () => {
    test('Should render input with default value if it is provided', async () => {
      const inputAreaProps = mockInputAreaProps()
      inputAreaProps.defaultValue = datatype.string()
      await makeSut(inputAreaProps)
      const inputComponent = screen.getByTestId(`input-area-container`)
      expect(inputComponent.textContent).toBe(inputAreaProps.defaultValue)
    })

    test('Should render input empty if default value is not provided', async () => {
      const inputAreaProps = mockInputAreaProps()
      delete inputAreaProps.defaultValue
      await makeSut(inputAreaProps)
      const inputComponent = screen.getByTestId(`input-area-container`)
      expect(inputComponent.textContent).toBe('')
    })
  })
})
