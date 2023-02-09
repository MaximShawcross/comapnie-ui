import { TextField } from "@mui/material";

export const TextInput = ({name, label, onChange, ...props}) => {
	const { margin, value } = props;
	
	return (
		<TextField
			required
			fullWidth
			id= {name}
			label= {label}
			name= {name}
			onChange= {onChange}
			size="small"
			margin= {margin}
			value = {value}
		/>
	);
};



