import { ThemeProvider } from "@emotion/react";
import {
	Avatar, Box, Button, Container, FormControl,
	createTheme, CssBaseline, InputLabel,
	Grid, Link, Typography, Select, MenuItem
} from "@mui/material";

import { useFormik } from "formik";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userRegisterReset } from "../../features/auth/auth.slice";
import { registerUser } from '../../features/auth/auth.register';
import { signUpvalidationSchema } from "../../features/validation.schemas";
import { TextInput } from "../text-input/text-input";

import "./signin-form.scss";
import { LoginTextInput } from "../login-text-input/login-text-input";

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
		validationSchema: signUpvalidationSchema,

		onSubmit: (values) => {
			values.email = values.email.toLowerCase();

			dispatch(registerUser(values));
		}
	});

	//redirect to login function
	const checkUserRegister = useCallback(() => {
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
								<LoginTextInput
									name="first_name"
									id = "first_name" 
									label="First Name" 
									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.first_name}
									error={formik.touched.first_name && Boolean(formik.errors.first_name)}
									helperText={formik.touched.first_name && formik.errors.first_name}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<LoginTextInput
									name="last_name"
									id = "last_name" 
									label="Last Name" 
									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.last_name}
									error={formik.touched.last_name && Boolean(formik.errors.last_name)}
									helperText={formik.touched.last_name && formik.errors.last_name}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<LoginTextInput
									name="phone_number"
									id = "phone_number" 
									label="Phone Number" 
									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.phone_number}
									error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
									helperText={formik.touched.phone_number && formik.errors.phone_number}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<LoginTextInput
									name="nick_name"
									id = "nick_name" 
									label="Nick Name" 
									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.nick_name}
									error={formik.touched.nick_name && Boolean(formik.errors.nick_name)}
									helperText={formik.touched.nick_name && formik.errors.nick_name}     
									size = "small"        							
								/>
							</Grid>

							<Grid item xs={12}>
								<LoginTextInput
									name="email"
									id = "email" 
									fullWidth
									label="Email" 
									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.email}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12}>
								<LoginTextInput
									name="password"
									id = "password" 
									label="Password" 
									fullWidth

									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.password}
									error={formik.touched.password && Boolean(formik.errors.password)}
									helperText={formik.touched.password && formik.errors.password}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12}>
								<LoginTextInput
									name="position"
									id = "position" 
									label="Position" 
									fullWidth

									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.position}
									error={formik.touched.position && Boolean(formik.errors.position)}
									helperText={formik.touched.position && formik.errors.position}     
									size = "small"        							
								/>
							</Grid>
							<Grid item xs={12}>
								<LoginTextInput
									name="description"
									id = "description" 
									label="Description" 
									fullWidth

									onChange={formik.handleChange} 
									// margin = "normal" 
									onBlur={formik.handleBlur}
									value={formik.values.description}
									error={formik.touched.description && Boolean(formik.errors.description)}
									helperText={formik.touched.description && formik.errors.description}     
									size = "small"        							
								/>
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
								<NavLink to ="/login" style={{textDecoration: "none"}}>
									Already have an account? Sign in
								</NavLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}