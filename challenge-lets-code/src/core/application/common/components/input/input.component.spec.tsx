import { screen } from '@testing-library/react'
import { datatype } from 'faker'

import { Input, InputProps } from '@/core/application/common/components'
import { RenderWithForm } from '@/core/application/common/helpers'
import { mockInputProps } from '@/core/application/common/components/input/mocks'

const makeSut = async (
  param: InputProps,
  onSubmit: (data: any) => void = jest.fn(),
): Promise<void> => {
  await RenderWithForm(() => <Input {...param} />, onSubmit)
}

describe('Input', () => {
  describe('General behaviour', () => {
    test('Should render input', async () => {
      await makeSut(mockInputProps())
      screen.getByTestId(`input-container`)
    })
  })

  describe('Styles', () => {
    test('Should render input type text styles if input type is not provided', async () => {
      await makeSut(mockInputProps())
      const container = screen.getByTestId(`input-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(51,51,51,0.2);
        height: 51px;
        width: 100%;
        padding: 0 1.2rem;
      `)
    })
  })

  describe('Placeholder', () => {
    describe('Placeholder', () => {
      test('Should render input with placeholder if placeholder is provided', async () => {
        const inputProps = mockInputProps()
        inputProps.placeholder = datatype.string()
        await makeSut(inputProps)
        const inputComponent = screen.getByTestId(`input-container`)
        expect(inputComponent).toHaveAttribute(
          'placeholder',
          inputProps.placeholder,
        )
      })

      test('Should render input without placeholder if placeholder is not provided', async () => {
        const inputProps = mockInputProps()
        delete inputProps.placeholder
        await makeSut(inputProps)
        const inputComponent = screen.getByTestId(`input-container`)
        expect(inputComponent).not.toHaveAttribute('placeholder')
      })
    })
  })

  describe('Default value', () => {
    test('Should render input with default value if it is provided', async () => {
      const inputProps = mockInputProps()
      inputProps.defaultValue = datatype.string()
      await makeSut(inputProps)
      const inputComponent = screen.getByTestId(`input-container`)
      expect(inputComponent).toHaveAttribute('value', inputProps.defaultValue)
    })

    test('Should render input empty if default value is not provided', async () => {
      const inputProps = mockInputProps()
      delete inputProps.defaultValue
      await makeSut(inputProps)
      const inputComponent = screen.getByTestId(`input-container`)
      expect(inputComponent).toHaveAttribute('value', '')
    })
  })
})
