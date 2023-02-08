import * as yup from 'yup';

export const signUpvalidationSchema = yup.object({
	email: yup.string("")
		.email("write please an email")
		.required("this field is required!"),
	password: yup.string("").required("this field is required"),
	nick_name: yup.string("").required("this field is required"),
	first_name: yup.string("").required("this field is required"),
	last_name: yup.string("").required("this field is required"),
	phone_number: yup.string("").required("this field is required"),
	possition: yup.string("").required("this field is required"),
	description: yup.string().required("this field is required")
})

export const signInvalidationSchema = yup.object({
	email: yup.string()
		.email("write please an email")
		.required("this field is required"),
	password: yup.string().required("this field is required")
})