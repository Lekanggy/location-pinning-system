
import { CloseIcon, FormContainer,  Icon} from './form.styled';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import FormDetails from './FormDetails';
import useForm from '../hooks/useForm';


const CustomerForm = () => {
  
  const {open, toggleForm} = useForm()

  return (
    <>
      {
      !open ? (
            <Icon onClick={toggleForm}>
              <GiHamburgerMenu/>
             </Icon>
             )
             :(
               <FormContainer>
                <CloseIcon onClick={toggleForm}>
                  <MdOutlineCancel/>
                </CloseIcon>
               <FormDetails/>
              </FormContainer>
             )
      }
   
    </>
   
  );
};

export default CustomerForm;
