import {useEffect, useState} from 'react'
import { client } from '../utils/axios-instance';
import useCustomer from './useCustomer';
import { dataForm } from '../components/data';

const useForm = () => {
  const {
    open, 
    setOpen, 
    dataState, 
    setDataState,
    formData, 
    setFormData
  } = useCustomer()

  const [isSubmitting, setIsSubmitting] = useState(false);
 

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
    if(formData !== null && formData?.pos?.lat > 0){
      // Handle form submission here, e.g., send data to server
      console.log('Form submitted:', formData);
      submitData()
    }
    return;
    
  };

  useEffect(()=>{
    const submitForm = async ()=>{
      const request = client()
      console.log("inside form", isSubmitting)
      try {
        await request.post('http://localhost:1550/api/users', formData).then((res)=>{
          setFormData(dataForm)
          setDataState("success")
          console.log(res.data)
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
      setIsSubmitting(false)
      setTimeout(()=>{
        submitForm()
      }, 1000)

      //submitForm()
     
    }
  }, [isSubmitting, formData, setDataState, setIsSubmitting, setFormData])
  
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