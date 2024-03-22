import useForm from '../hooks/useForm';
import Loader from './Loader';
import {Form, FormGroup, Label, Input, Button, FormTitle, Text} from './form.styled';

const FormDetails = () => {

    const {handleChange, handleSubmit, formData, dataState} = useForm()

    console.log("fomr", formData)
  return (
    <Form>
        <FormTitle>Customer Details</FormTitle>
        <Text>👉 click the map interface to add location</Text>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contactInfo">Contact Information</Label>
          <Input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" onClick={handleSubmit} disabled={dataState === "loading"}>
          {
            (dataState === "idle"  || dataState === "success") && "Submit"
          }
          {
            dataState === "loading" && <Loader/>
          }
        </Button>
      </Form>
  )
}

export default FormDetails