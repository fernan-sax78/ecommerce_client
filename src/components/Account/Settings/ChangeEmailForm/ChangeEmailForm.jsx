import styles from './changeEmailForm.module.scss';
import { Form , Icon} from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues , validationShema } from './ChangeEmailForm.form';
import { User } from '@/api';
import { useAuth } from '@/hooks';
import { useState } from 'react';

const userCtrl = new User();

export function ChangeEmailForm() {

    const { user , updateUser } = useAuth();
    const [checkOk , setCheckOk] = useState(false);

  const formik = useFormik({
    initialValues : initialValues(),
    validationSchema : validationShema(),
    validateOnChange : false,
    onSubmit : async (formValue)=>{
        try {
          await userCtrl.updateMe(user.id , { email : formValue.email});
          updateUser('email' , formValue.email )
          formik.handleReset()
          setCheckOk(true);
        } catch (error) {
            console.error(error);
        }
    }
  })


  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Edit Email</label>

      <Form.Input 
      name = "email" 
      placeholder = "New Email" 
      value = {formik.values.email} 
      onChange={formik.handleChange}
      error={formik.errors.email}
      />
      <Form.Input 
      name = "repeatEmail" 
      placeholder = "Repeat your Email Again"
      value = {formik.values.repeatEmail} 
      onChange={formik.handleChange}
      error={formik.errors.repeatEmail}
      />

      <div>
      <Form.Button type='submit' loading = {formik.isSubmitting}>
        Send Change
      </Form.Button>
        <span>{checkOk ? <Icon name = "check"/> : ''  }</span>
      </div>
    </Form>
  )
}


