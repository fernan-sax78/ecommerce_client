import * as Yup from 'yup';


export function initialValues() {
    return {
        password : "",
        repeatPassword : ""
    };
}


export function validationShema() {
    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword : Yup.string().required(true).oneOf([Yup.ref("password")], 'Something is wrong, try again'),
    })
}