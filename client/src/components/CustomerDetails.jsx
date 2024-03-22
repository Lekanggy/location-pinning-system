import styled from "styled-components"
import { Column } from "../../globalStyled"
import PropTypes from 'prop-types'

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
const CustomerDetails = ({user}) => {
  return (
    <Wrapper>
        <Detail className="detail">
            <span className="c-name">Name</span>
            <span className="c-text">{user?.name}</span>
        </Detail>
        <Detail className="detail">
            <span className="c-name">Address</span>
            <span className="c-text">{user?.address}</span>
        </Detail>
        <Detail className="detail">
            <span className="c-name">Contact Info</span>
            <span className="c-text">{user?.address}</span>
        </Detail>
        <Detail className="detail">
            <span className="c-name">Distance</span>
            <span className="c-text">{user?.dist + "Km"}</span>
        </Detail>
    </Wrapper>
  )
}

CustomerDetails.propTypes = {
    user: PropTypes.object
}

export default CustomerDetails