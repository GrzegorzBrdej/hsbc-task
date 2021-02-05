import React from 'react'
import {
  Wrapper,
  DetailsWrapper,
  Title,
  Subtitle,
  Details,
  Detail,
  DetailHeader,
  DetailValue,
  PendingMark,
  ActionsWrapper,
  Buttons,
  Icon,
  Separator,
  RejectBtn,
  AcceptBtn,
  LinkWrapper,
  Link,
} from './styled-elements'

function Card ({
  item,
  handlePdf,
  handlePrint,
  handleReject,
  handleAuthorise,
  handleDetails
}) {
  return (
    <Wrapper>
      <DetailsWrapper>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>

        <Details>
          <Detail>
            <DetailHeader>Request reference</DetailHeader>
            <DetailValue>{item.req_ref}</DetailValue>
          </Detail>

          <Detail>
            <DetailHeader>Category</DetailHeader>
            <DetailValue>{item.category}</DetailValue>
          </Detail>

          <Detail>
            <DetailHeader>Request status</DetailHeader>
            <DetailValue>
              {item.isPending && (
                <PendingMark>
                  <i className='fa fa-exclamation-circle' aria-hidden='true'></i>
                </PendingMark>
              )}
              {item.isPending ? 'Pending authorisation' : 'Authorised'}
            </DetailValue>
          </Detail>
        </Details>
      </DetailsWrapper>
      <ActionsWrapper>
        <Buttons>
          <Icon onClick={handlePdf}>
            <i className='fa fa-file-pdf-o' aria-hidden='true'></i>
          </Icon>
          <Separator></Separator>
          <Icon onClick={handlePrint}>
            <i className='fa fa-print' aria-hidden='true'></i>
          </Icon>

          <RejectBtn onClick={handleReject}>Reject</RejectBtn>
          <AcceptBtn onClick={handleAuthorise}>Authorise</AcceptBtn>
        </Buttons>

        <LinkWrapper>
          <Link onClick={handleDetails}>
            Full details <i className='fa fa-caret-down' aria-hidden='true'></i>
          </Link>
        </LinkWrapper>
      </ActionsWrapper>
    </Wrapper>
  )
}

export default Card
