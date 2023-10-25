import * as Yup from "yup";


export function initialValues(){
    return {
        email : "" ,
        username : "" ,
        firstname : "" ,
        lastname : "" ,
        password : "" ,
    }
}

export function validationSchema () {
    return Yup.object({
        email : Yup.string().email(true).required(true),
        username : Yup.string().required(true),
        firstname : Yup.string().required(true),
        lastname : Yup.string().required(true),
        password : Yup.string().required(true),
    })
}