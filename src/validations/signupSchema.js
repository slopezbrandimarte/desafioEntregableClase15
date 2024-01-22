import {object, ref, string} from "yup"

export const signupSchema = object({
    email:string()
        .email("Ingrese un email valido")
        .required("Ingrese un email"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .required("ingrese un password"),
    confirmPassword:string()
        .oneOf([ref("password")],"Los passord no son iguales")
        .required("Vuelva a ingresar el password")
})