import styles from './changePasswordForm.module.scss';
import { Form , Icon} from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationShema } from './ChangePasswordForm.form';
import { User } from '@/api';
import { useAuth } from '@/hooks';


const userCtrl = new User();

export function ChangePasswordForm() {


    const { user , logout } = useAuth();
    

    const formik = useFormik({
        initialValues : initialValues(),
        validationSchema : validationShema(),
        validateOnChange : false,
        onSubmit : async (formValue) => {
            try {
                await userCtrl.updateMe(user.id , { password : formValue.password});
                logout();
            } catch (error) {
                throw error ;
            }
        }
    });

    
  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Edit Your Password</label>
      <Form.Input 
      type='password' 
      name = 'password' 
      placeholder = 'New Password'
      value = {formik.values.password}
      onChange={formik.handleChange}
      error={formik.errors.password}
      />

      <Form.Input 
      type='password' 
      name = 'repeatPassword' 
      placeholder = 'Repeat your Change in Password' 
      value = {formik.values.repeatPassword}
      onChange={formik.handleChange}
      error={formik.errors.repeatPassword}
      />


       <div>
          <Form.Button type='submit' loading = {formik.isSubmitting}>
             Send Change
          </Form.Button>
          
       </div>


      
    </Form>
  )
}

 
