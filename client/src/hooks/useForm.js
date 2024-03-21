import {useEffect, useState} from 'react'
import { client } from '../utils/axios-instance';

const useForm = () => {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dataState, setDataState] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactInfo: '',
  });

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
        await request.post().then(()=>{
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
  }, [isSubmitting])
  
    return {
        handleChange, 
        handleSubmit, 
        formData,
        dataState, 
        open, 
        setOpen, 
        toggleForm
    }
}

export default useForm