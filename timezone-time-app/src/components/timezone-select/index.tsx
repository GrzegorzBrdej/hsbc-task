import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ZONES_API } from '../../consts'
import { ITimezone, IZonesResponse, ITimezoneSelectProps } from '../../types'

const Select = styled.select`
  min-height: 24px;
  width: 200px;
  margin-top: 15px;
`

function TimezoneSelect ({ timezone = '', onChange }: ITimezoneSelectProps) {
  const [timezones, setTimezones] = useState<Array<ITimezone>>([])

  useEffect(() => {
    let mounted = true

    fetch(ZONES_API)
      .then(res => res.json())
      .then((res: IZonesResponse) => {
        if (!mounted) {
          return
        }
        if (res.status === 'OK') {
          setTimezones(res.zones)
        } else {
          // set error message
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <Select value={timezone} onChange={handleChange} data-testid='select-zone'>
      <option value=''>-----------</option>
      {timezones.map(tz => (
        <option value={tz.zoneName} key={tz.zoneName}>
          {tz.countryName}
        </option>
      ))}
    </Select>
  )
}

export default TimezoneSelect
