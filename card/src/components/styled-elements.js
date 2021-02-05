import styled from 'styled-components'

export const Wrapper = styled.section`
  border: 1px solid;
  width: 780px;
  flex-direction: row;
  display: flex;
`

export const DetailsWrapper = styled.div`
  flex: 1;
`

export const ActionsWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 0;
`

export const Subtitle = styled.h3`
  margin: 0;
  font-size: 12px;
  margin-bottom: 15px;
`

export const Buttons = styled.div`
  flex-direction: row;
  margin-top: 15px;
`

export const Icon = styled.span`
  font-size: 20px;
  margin: 4px;
  &:hover {
    cursor: pointer;
  }
`

export const Separator = styled.span`
  border-right: 1px solid;
  margin-left: 10px;
  margin-right: 10px;
`

export const Button = styled.button`
  padding: 10px 15px;
  outline: 0;
  &:hover {
    cursor: pointer;
  }
`

export const RejectBtn = styled(Button)`
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
`

export const AcceptBtn = styled(Button)`
  background-color: gray;
  color: white;
`

export const Details = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const Detail = styled.div`
  border-left: 1px solid;
  padding-left: 5px;
  padding-right: 10px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
`

export const DetailHeader = styled.span`
  color: gray;
`

export const DetailValue = styled.span`
  font-size: 11px;
  font-weight: bold;
  line-height: 14px;
`

export const LinkWrapper = styled.div`
  display: block;
  text-align: right;
  margin-bottom: 15px;
  margin-right: 10px;
`

export const PendingMark = styled.span`
  font-size: 14px;
  color: orange;
  margin-right: 4px;
`

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
