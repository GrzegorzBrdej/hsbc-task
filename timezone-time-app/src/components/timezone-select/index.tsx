import React, { useEffect, useState } from 'react'
import { ZONES_API } from '../../consts'
import { ITimezone, IZonesResponse, ITimezoneSelectProps } from '../../types'

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
    <select value={timezone} onChange={handleChange}>
      {timezones.map(tz => (
        <option value={tz.zoneName} key={tz.zoneName}>
          {tz.countryName}
          {/* offset to +X format */}
        </option>
      ))}
    </select>
  )
}

export default TimezoneSelect
