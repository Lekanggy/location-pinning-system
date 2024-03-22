import styled from 'styled-components';
import { Column } from '../../globalStyled';

// Styled components for the form
export const FormContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 1rem;
  max-width: 400px;
  margin: 0 auto;
  z-index: 1000;
  background: #fff;
  border-radius: 8px;
 
`;
export const Text = styled.span`
  font-size: 12px;
  font-size: 400;
  color: #088F71;
  //color: "#4DD245";
  padding-bottom: 1rem;
`

export const FormTitle = styled.span`
     //display:inline-block;
    color: #088F71;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormGroup = styled(Column)`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  /* margin-bottom: 0.5rem; */
  /* color: #088F71;
  padding-left: 1rem; */
  padding-bottom: 0.5rem;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Icon = styled.span` 
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background: #fff;
    position: absolute;
    top: 2rem;
    left: 1rem;
    cursor: pointer;
`

export const CloseIcon = styled(Icon)`
   left: auto;
   right: 0.5rem;
   top: 1rem;
   font-size: 1.3rem;
`