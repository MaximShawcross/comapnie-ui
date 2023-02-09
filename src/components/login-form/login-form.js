import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInvalidationSchema } from "../../features/validation.schemas";
import { loginUser } from '../../features/auth/auth.login';
import { useCallback, useEffect } from "react";
import { LoginTextInput } from "../login-text-input/login-text-input";


const theme = createTheme();


export const LoginForm = () => {
	const { userToken } = useSelector((state) => state.auth)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: signInvalidationSchema,
		onSubmit: (values) => {
			dispatch(loginUser(values));
		}
	});

	// check for user loggedin
	const checkUserLoggedIn = useCallback(() => {
		if ( userToken && userToken !== "undefined") {
			navigate("/");
		};
		
		// return;
	}, [userToken, navigate])

	useEffect(() => {
		checkUserLoggedIn();
	}, [checkUserLoggedIn])

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ mb: 1, bgcolor: 'secondary.main' }}>
					</Avatar>
					<Typography sx = {{ mb: 1}} component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
						<Grid item xs={12}>
							<LoginTextInput  
								name="email" id = "email" 
								label="Email" 
								onChange={formik.handleChange} 
								margin = "normal" 
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
								label="password" 
								onChange={formik.handleChange} 
								margin = "normal" 
								onBlur={formik.handleBlur}
								value={formik.values.password}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}     
								size = "small"        							
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 5, mb: -1 }}
							>
								Sign In
							</Button>					
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}
