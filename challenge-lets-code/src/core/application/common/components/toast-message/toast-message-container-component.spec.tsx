import '@testing-library/jest-dom'
import React from 'react'
import {
  ToastContainer,
  ToastContainerProps,
} from '@/core/application/common/components'
import { mockToastMessageModel } from '@/core/application/common/components/toast-message/mocks'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'
import { screen } from '@testing-library/react'

jest.useFakeTimers()

const makeSut = async (
  props: ToastContainerProps,
): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => <ToastContainer {...props} />)

describe('ToastContainer', () => {
  test('Should render a empty container if messages is not provided', async () => {
    await makeSut(undefined)
    const container = screen.getByTestId('toast-message-container')
    expect(container.childElementCount).toBe(0)
  })

  test('Should render a toast list in container if messages isprovided', async () => {
    await makeSut({
      messages: [
        mockToastMessageModel(),
        mockToastMessageModel(),
        mockToastMessageModel(),
      ],
    })
    const container = screen.getByTestId('toast-message-container')
    expect(container.childElementCount).toBe(3)
  })

  describe('Styles', () => {
    test('Toast message', async () => {
      await makeSut({ messages: [mockToastMessageModel()] })
      const container = screen.getByTestId('toast-message-container')
      expect(container).toHaveStyle(`
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,0%);
        padding: 30px;
        overflow: hidden;
        z-index: 100;
      `)
    })
  })
})
