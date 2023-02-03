import { ThemeProvider } from "@emotion/react";
import {
	Avatar, Box, Button, Container, FormControl,
	createTheme, CssBaseline, InputLabel,
	Grid, Link, Typography, Select, MenuItem
} from "@mui/material";

import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, userRegisterReset } from "../../features/auth.slice";
import { signInvalidationSchema } from "../../features/signin.validation.schema";
import { TextInput } from "../text-input/text-input";

const theme = createTheme();

export const SignUpForm = () => {
	const { success } = useSelector((state) => state.auth)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			nick_name: "",
			first_name: "",
			last_name: "",
			phone_number: "",
			position: ""
		},
		validationSchema: signInvalidationSchema,

		onSubmit: (values) => {
			values.email = values.email.toLowerCase();

			dispatch(registerUser(values));
		}
	});
	
	//redirect to login function
	const checkUserRegister = useCallback(
		() => {
			if (success) {
				navigate("/login");
				dispatch(userRegisterReset);
			};

			return;
		},
	  [success, dispatch, navigate],
	);

	useEffect(() => {
		checkUserRegister();
	}, [checkUserRegister, success])



	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextInput name="first_name" label="First Name" onChange={formik.handleChange} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="last_name" label="Last Name" onChange={formik.handleChange} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="phone_number" label="Phone Number" onChange={formik.handleChange} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="nick_name" label="Nick Name" onChange={formik.handleChange} />
							</Grid>

							<Grid item xs={12}>
								<TextInput name="email" label="Email" onChange={formik.handleChange} />
							</Grid>
							<Grid item xs={12}>
								<TextInput name="password" label="password" onChange={formik.handleChange} />
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth size="small">
									<InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
									<Select
										labelId="position"
										id="position"
										value={formik.values.position}
										label="Position"
										size="small"
										name="possition"
										onChange={formik.handleChange}
									>
										<MenuItem value="Junior">Junior</MenuItem>
										<MenuItem value="Middle">Middle</MenuItem>
										<MenuItem value="Senior">Senior</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextInput name="description" label="Description" onChange={formik.handleChange} />
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}