import React from 'react'
import { render, screen } from '@testing-library/react'
import TimeDisplay from './index'
import { albaniaMock } from '../../__mocks__/zones'
import { act } from 'react-dom/test-utils'

describe('TimeDisplay', () => {
  beforeEach(() => jest.spyOn(window, 'fetch'))

  test('should not render any time without timezone', async () => {
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => albaniaMock
    })

    render(<TimeDisplay timezone='' />)

    expect(screen.getByTestId('time')).toHaveTextContent('')
    expect(window.fetch).not.toHaveBeenCalled()
  })

  test('should render time for given timezone', async () => {
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => albaniaMock
    })

    await act(async () => {
      render(<TimeDisplay timezone={albaniaMock.zoneName} />)
    })

    expect(screen.getByTestId('time')).toHaveTextContent(albaniaMock.formatted)
    expect(window.fetch).toHaveBeenCalled()
  })

  test('should refetch time every 5 seconds', async () => {
    jest.useFakeTimers()

    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => albaniaMock
    })

    await act(async () => {
      render(<TimeDisplay timezone={albaniaMock.zoneName} />)
    })

    expect(window.fetch).toHaveBeenCalledTimes(1)

    await act(async () => {
      jest.runTimersToTime(5100)
    })

    expect(window.fetch).toHaveBeenCalledTimes(2)

    await act(async () => {
      jest.runTimersToTime(55000)
    })

    expect(window.fetch).toHaveBeenCalledTimes(13)
  })

  test('should call fetch 13 times after 60 seconds', async () => {
    jest.useFakeTimers()

    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => albaniaMock
    })

    await act(async () => {
      render(<TimeDisplay timezone={albaniaMock.zoneName} />)
      jest.runTimersToTime(60000)
    })

    expect(window.fetch).toHaveBeenCalledTimes(13)
  })
})
