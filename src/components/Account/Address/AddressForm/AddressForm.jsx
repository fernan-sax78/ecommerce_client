import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues , validationShema } from "./AddressForm.form";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export  function AddressForm(props) {

    const { onClose , onReload , addressId , address } = props;
    const { user } = useAuth();

   

    const formik = useFormik({
      initialValues : initialValues(address),
      validationSchema : validationShema(),
      validateOnChange : false,
      onSubmit : async (formValue) => {
        try {

         if (addressId) {
          await addressCtrl.update( formValue , addressId);
         }else{
          await addressCtrl.create(formValue , user.id);
         }


          formik.handleReset();
          onReload();
          onClose();
        } catch (error) {
          console.error(error);
        }
      }
    })



  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input 
      name = "title" 
      placeholder = "This is a Title of Your Address" 
      value = {formik.values.title} 
      onChange={formik.handleChange} 
      error={formik.errors.title}
      />

        <Form.Input 
        name = "name" 
        placeholder = "Your Name and Lastname"
        value = {formik.values.name} 
        onChange={formik.handleChange} 
        error={formik.errors.name}
        />


        <Form.Input 
        name = "address" 
        placeholder = "Your Address"
        value = {formik.values.address} 
        onChange={formik.handleChange} 
        error={formik.errors.address}
        />



      <Form.Group widths= "equal">
        <Form.Input 
        name = "city"
        value = {formik.values.city} 
        onChange={formik.handleChange} 
        error={formik.errors.city}
        placeholder = "Your City"
        />
        <Form.Input 
        name = "state" 
        placeholder = "Your State"
        value = {formik.values.state} 
        onChange={formik.handleChange} 
        error={formik.errors.state}
        />
      </Form.Group>

      <Form.Group widths= "equal">
        <Form.Input 
        name = "postal_code" 
        placeholder = "Your Postal Code"
        value = {formik.values.postal_code}
        onChange={formik.handleChange} 
        error={formik.errors.postal_code}
        />
        <Form.Input 
        name = "phone" 
        placeholder = "Your number Phone"
        value = {formik.values.phone} 
        onChange={formik.handleChange} 
        error={formik.errors.phone}
        />
      </Form.Group>


      <Form.Button type="submit" fluid loading = {formik.isSubmitting}>
        Send Address
      </Form.Button>


    </Form>
  )
}


