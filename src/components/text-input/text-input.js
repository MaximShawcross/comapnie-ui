import { TextField } from "@mui/material";
import { useField } from "formik";


export const TextInput = ({name, label, onChange, ...props}) => {

	return (
		<TextField
			required
			fullWidth
			id= {name}
			label= {label}
			name= {name}
			onChange= {onChange}
			size="small"
		/>
	);
};


