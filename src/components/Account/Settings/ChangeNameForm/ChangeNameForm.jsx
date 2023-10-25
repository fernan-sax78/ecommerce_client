import styles from './changeNameForm.module.scss';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import {initialValues , validationSchema} from './ChangeNameForm.form';
import { useAuth } from '@/hooks'; 
import { User } from '@/api';
import { useState } from 'react';


const userCtrl = new User();

export function ChangeNameForm() {

  const { user } = useAuth();
  const [checkOk , setCheckOk] = useState(false);





  const formik = useFormik({
    initialValues : initialValues(user.firstname, user.lastname),
    validationSchema : validationSchema(),
    validateOnChange : false,
    onSubmit : async(formValue) => {
      try {
         await userCtrl.updateMe(user.id , formValue)
        setCheckOk(true);
      } catch (error) {
        console.error(error);
      }
    }
  })



  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Edit Name and Lastname</label>

      <div className={styles.content}>
        <Form.Input name = "firstname" placeholder = "Name" value = {formik.values.firstname} onChange={formik.handleChange} error={formik.errors.firstname}/>
        <Form.Input name = "lastname" placeholder = "Lastname" value = {formik.values.lastname} onChange={formik.handleChange} error={formik.errors.lastname}/>
        <Form.Button type = "submit" loading = {formik.isSubmitting}>Send Change</Form.Button>
        <div>{checkOk ? <Icon name = "check"/> : ''  }</div>
      </div>
    </Form>
  )
}


