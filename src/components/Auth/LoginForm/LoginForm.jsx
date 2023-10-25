import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues , validationSchema } from "./LoginForm.form";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

const authCtrl = new Auth();

function LoginForm() {
   
  const router = useRouter();

  const { login } = useAuth();


  const formik = useFormik({
    initialValues : initialValues(),
    validationSchema : validationSchema(),
    validateOnChange : false ,
    onSubmit : async (formValue) => {
        try {

          const response = await authCtrl.login(formValue);
          login(response.jwt);
         
          router.push("/");

        } catch (error) {
          console.log(error);
        }
    }
  })




  return (
    <Form onSubmit = {formik.handleSubmit}>
        <Form.Input
        name = "identifier" 
        type = "text" 
        placeholder = "Your Email or UserName"
        value = {formik.values.identifier}
        onChange = {formik.handleChange}
        error = {formik.errors.identifier}
        autoComplete= "off"
        />

        <Form.Input 
        name = "password"
        type = "password"
        placeholder = "Put here your Password"
        value = {formik.values.password}
        onChange = {formik.handleChange}
        error = {formik.errors.password}
        autoComplete= "off"
        />

        <Form.Button type = "submit" fluid loading = {formik.isSubmitting}>Submit</Form.Button>
    </Form>
  )
}

export default LoginForm;
