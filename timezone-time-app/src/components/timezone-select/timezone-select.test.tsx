import React from 'react'
import { render, screen } from '@testing-library/react'
import TimezoneSelect from './index'
import { mockTz } from '../../__mocks__/zones'
import { act } from 'react-dom/test-utils'

describe('TimezoneSelect', () => {
  beforeEach(() => jest.spyOn(window, 'fetch'))

  test('should call api on load and render options', async () => {
    const handleChange = jest.fn()
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockTz
    })

    await act(async () => {
      render(
        <TimezoneSelect timezone='Europe/Tirane' onChange={handleChange} />
      )
    })

    expect(window.fetch).toHaveBeenCalled()
    expect(screen.getByTestId('select-zone').children.length).toBe(
      mockTz.zones.length + 1
    )
    expect(screen.getByTestId('select-zone').children[1]).toHaveTextContent(
      mockTz.zones[0].countryName
    )
  })
})
