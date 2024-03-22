import useForm from '../hooks/useForm';
import {Form, FormGroup, Label, Input, Button, FormTitle} from './form.styled';

const FormDetails = () => {

    const {handleChange, handleSubmit, formData} = useForm()

    console.log("fomr", formData)
  return (
    <Form onSubmit={handleSubmit}>
        <FormTitle>Customer Details</FormTitle>
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
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
  )
}

export default FormDetails