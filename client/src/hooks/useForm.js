import {useEffect} from 'react'
import { client } from '../utils/axios-instance';
import useCustomer from './useCustomer';

const useForm = () => {
  const {
    open, 
    setOpen, 
    isSubmitting, 
    setIsSubmitting, 
    dataState, 
    setDataState,
    formData, 
    setFormData
  } = useCustomer()
  // const [open, setOpen] = useState(false)
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [dataState, setDataState] = useState("")
  // const [formData, setFormData] = useState({
  //   name: '',
  //   address: '',
  //   contactInfo: '',
  //   pos: {lat: 0, lng: 0}
  // });

  const toggleForm = ()=> setOpen(prev=>!prev)
  const submitData = ()=>{
    setIsSubmitting(true)
    setDataState("loading")
    //showToast('Sending data...', 'loading');
 }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData !== null && Object.values(formData).every(v=> v !== "" || v.length > 0)){
      // Handle form submission here, e.g., send data to server
      console.log('Form submitted:', formData);
      submitData()
    }
    return;
    
  };

  useEffect(()=>{
    const submitForm = async ()=>{
      const request = client()
      try {
        await request.post('http://localhost:1550/api/users', formData).then(()=>{
          setDataState("success")
        }).catch(error=>{
          console.log(error)
          setDataState("failed")
        }).finally(()=>{
          setDataState("idle")
        })
      } catch (error) {
        console.log(error)
      }
    }

    if(isSubmitting){
      submitForm()
    }
  }, [isSubmitting, formData, setDataState])
  
    return {
        handleChange, 
        handleSubmit, 
        formData,
        setFormData,
        dataState, 
        open, 
        setOpen, 
        toggleForm
    }
}

export default useForm