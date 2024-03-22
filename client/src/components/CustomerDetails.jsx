import styled from "styled-components"
import { Column } from "../../globalStyled"

const Wrapper = styled(Column)`
   
    gap: 1rem;

    

    span{
        display: inline-flex;
        font-family: "inter";
        text-align: left;
    }
    .c-name{
        font-weight: 600;
        font-size: 1rem;
    }

    .c-text{
        font-weight: 400;
        font-size: 0.75rem;
    }
`
const Detail = styled(Column)`
   gap: 0.2rem;
`
const CustomerDetails = () => {
  return (
    <Wrapper>
        <Detail className="detail">
            <span className="c-name">Name</span>
            <span className="c-text">Aderinsole hule</span>
        </Detail>
        <Detail className="detail">
            <span className="c-name">Address</span>
            <span className="c-text">Aderinsole hule hamo dshgjfghjrtui</span>
        </Detail>
        <Detail className="detail">
            <span className="c-name">Contact Info</span>
            <span className="c-text">Aderinsole hule hamo dshgjfghjrtui</span>
        </Detail>
    </Wrapper>
  )
}

export default CustomerDetails