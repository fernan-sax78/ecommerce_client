import * as Yup from 'yup';


export function initialValues() {
    return {
        email : "",
        repeatEmail : ""
    };
}




export function validationShema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        repeatEmail : Yup.string().email(true).required(true).oneOf([Yup.ref("email")], 'Something is wrong, try again'),
    })
}