import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

export const SelecInput = ({ role, handleRoleChange }) => {
	return (
		<Grid item xs={12}>

			<FormControl fullWidth size="small">
				<InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={role}
					label="Position"
					size="small"
					// onChange={handleRoleChange}
				>
					<MenuItem value="Junior">Junior</MenuItem>
					<MenuItem value="Middle">Middle</MenuItem>
					<MenuItem value="Sinior">Senior</MenuItem>
				</Select>
			</FormControl>
		</Grid>

	);
};
