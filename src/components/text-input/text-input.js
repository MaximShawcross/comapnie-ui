import { TextField } from "@mui/material";


export const TextInput = ({name, label, onChange, ...props}) => {
	const { margin } = props;
	
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
		/>
	);
};


