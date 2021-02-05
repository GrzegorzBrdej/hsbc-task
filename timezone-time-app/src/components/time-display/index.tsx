import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ZONE_TIME_API } from '../../consts'
import { ITimeDisplayProps, ITimeResponse } from '../../types'

const Time = styled.div`
border: 1px solid black;
width: 200px;
margin: 20px auto;
`

function TimeDisplay ({ timezone = '' }: ITimeDisplayProps) {
  const [time, setTime] = useState<string>()

  const fetchTimeForZone = async (timezone: string) => {
    const timeForZone: ITimeResponse = await fetch(
      `${ZONE_TIME_API}&zone=${timezone}`
    ).then(res => res.json())

    if (timeForZone.status === 'OK') {
      setTime(timeForZone.formatted)
    }
  }

  useEffect(() => {
    if (!timezone) {
      return
    }

    fetchTimeForZone(timezone)

    const getTimeInterval = setInterval(() => fetchTimeForZone(timezone), 5000)

    return () => {
      clearInterval(getTimeInterval)
    }
  }, [timezone])

  return <Time>{time}</Time>
}

export default TimeDisplay
