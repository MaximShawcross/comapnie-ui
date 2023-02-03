import * as yup from 'yup';

export const signInvalidationSchema = yup.object({
	email: yup.string("")
		.email("email")
		.required(""),
	password: yup.string("").required(""),
	nick_name: yup.string("").required(""),
	first_name: yup.string("").required(""),
	last_name: yup.string("").required(""),
	phone_number: yup.string("").required(""),
	possition: yup.mixed("").required("").oneOf(["Junior", "Middle", "Senior"]),
	description: yup.string().required()
})