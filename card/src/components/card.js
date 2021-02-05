import styled from 'styled-components'

const Wrapper = styled.section`
border: 1px solid;
min-height: 80px;
width: 780px;
flex-direction: row;
display: flex;
`

const Title = styled.h1`
font-size: 1.3em;
font-weight: bold;
flex: 1 1 0.625%;
`

const Buttons = styled.div`
flex: 0 0 240px;
flex-direction: row;
margin-top: 15px;
`

const Icon = styled.i`
font-size: 20px;
margin: 4px;
`

const Separator = styled.span`
border-right: 1px solid;
margin-left: 10px;
margin-right: 10px;
`

const Button = styled.button`
padding: 10px 15px;
`

const RejectBtn = styled(Button)`
background-color: white;
margin-right: 5px;
`

const AcceptBtn = styled(Button)`
background-color: gray;
color: white;
`

function Card() {
    return (
      <Wrapper>
        <Title>
            Cancel / recall payment, GBP 1,000. 00
        </Title>
        <Buttons>
            <Icon><i class="fa fa-file-pdf-o" aria-hidden="true"></i></Icon>
            <Separator></Separator>
            <Icon><i class="fa fa-print" aria-hidden="true"></i></Icon>

            <RejectBtn>Reject</RejectBtn>
            <AcceptBtn>Authorise</AcceptBtn>
        </Buttons>
      </Wrapper>
    );
  }
  
  export default Card;
  