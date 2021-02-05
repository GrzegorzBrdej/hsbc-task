export interface ITimezoneSelectProps {
  timezone?: string
  onChange: (timezone: string) => void
}
export interface ITimeDisplayProps {
  timezone?: string
}
export interface ITimezone {
  countryCode: string
  countryName: string
  zoneName: string
  gmtOffset: number
  timestamp: number
}
export interface IZonesResponse {
  status: string
  message: string
  zones: Array<ITimezone>
}
export interface ITimeResponse {
  abbreviation: string
  countryCode: string
  countryName: string
  dst: string
  dstEnd: number
  dstStart: number
  formatted: string
  gmtOffset: number
  message: string
  nextAbbreviation: string
  status: string
  timestamp: number
  zoneName: string
}
