import { ThemeProvider } from '@emotion/react';
import { Button, createTheme, CssBaseline, Grid, Typography, Box, Container } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useUpdateUserMutation } from '../../features/company-api.service';
import { selectById } from '../../features/users/users.slice';
import { TextInput } from '../text-input/text-input';
import "./users-edit-form.scss";

const theme = createTheme();

export const UsersEditForm = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const user = useSelector(state => selectById(state, id));

	const [
		updateUser,
		{isLoading, isSuccess}
	] = useUpdateUserMutation();

	const formik = useFormik({
		initialValues: {
			email: user.email,
			password: user.password,
			first_name: user.first_name,
			last_name: user.last_name,
			nick_name: user.nick_name,
			phone_number: user.phone_number,
			position: user.position,
			description: user.description
		},
		onSubmit: async (userParams) => {
			updateUser({ id, ...userParams });
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<Container component="section" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ mb: 1, mt: 12 }} component="h1" variant="h5">
						Edit User
					</Typography>
					<Box component="form" onSubmit={formik.handleSubmit} noValidate 
						sx={{ mt: 1, width: 600 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextInput name="email" label="email" onChange={formik.handleChange} margin="dense" />
							</Grid>
							<Grid item xs={12}>
								<TextInput name="password" label="adress" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="first_name" label="first_name" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="last_name" label="last_name" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12}>
								<TextInput name="nick_name" label="nick_name" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12}>
								<TextInput name="phone_number" label="phone_number" onChange={formik.handleChange} margin="dense" />
							</Grid>
							<Grid item xs={12}>
								<TextInput name="position" label="position" onChange={formik.handleChange} margin="dense" />
							</Grid>
							<Grid item xs={12}>
								<TextInput name="description" label="description" onChange={formik.handleChange} margin="dense" />
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									sx={{ mt: 3, mb: -1, mw: 120}}
								>
									Edit!
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};