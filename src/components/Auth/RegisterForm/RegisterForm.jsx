

import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues , validationSchema } from './RegisterForm.form';
import { Auth } from '@/api';
import { useRouter } from 'next/router';

const authCtrl = new Auth();


export function RegisterForm() {

  const router = useRouter();

  const formik = useFormik({
    initialValues : initialValues(),
    validationSchema : validationSchema(),
    validateOnChange : false ,
    onSubmit : async (formValue) => {
        try {
          await authCtrl.register(formValue);
          router.push('/join/sign-in');
          //console.log('Every thing ok....');
        } catch (error) {
          console.log(error);
        }
    }
  })



  return (
     <Form onSubmit = {formik.handleSubmit}>
        <Form.Group widths = "equal">
            <Form.Input 
            name = "email" 
            type = "text" 
            placeholder = "Email" 
            value = {formik.values.email}
            onChange = {formik.handleChange}
            error = {formik.errors.email}
            autoComplete= "off"
            />
            <Form.Input 
            name = "username" 
            type = "text" 
            placeholder = "Username" 
            value = {formik.values.username}
            onChange = {formik.handleChange}
            error = {formik.errors.username}
            autoComplete= "off"
            />
        </Form.Group>

        <Form.Group widths = "equal">
            <Form.Input 
            name = "firstname" 
            type = "text" 
            placeholder = "Name" 
            value = {formik.values.firstname}
            onChange = {formik.handleChange}
            error = {formik.errors.firstname}
            autoComplete= "off"
            />
            <Form.Input 
            name = "lastname" 
            type = "text" 
            placeholder = "LastName" 
            value = {formik.values.lastname}
            onChange = {formik.handleChange}
            error = {formik.errors.lastname}
            autoComplete= "off"
            />
        </Form.Group>


        <Form.Group widths = "equal">

          <Form.Input 
            name = "password" 
            type = "password" 
            placeholder = "Password" 
            value = {formik.values.password}
            onChange = {formik.handleChange}
            error = {formik.errors.password}
            autoComplete= "off"
            />

        </Form.Group>
        
        <Form.Button type = "submit" fluid loading = {formik.isSubmitting}>
          Create Account
        </Form.Button>
          
       
     </Form>
  )
}





