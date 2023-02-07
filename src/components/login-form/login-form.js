import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInvalidationSchema } from "../../features/validation.schemas";
import { TextInput } from "../text-input/text-input";
import { loginUser } from '../../features/auth/auth.login';
import { useCallback, useEffect } from "react";
// import "./login-form.scss";

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
					<Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
						<Grid item xs={12}>
							<TextInput name="email" label="Email" onChange={formik.handleChange} margin = "normal" />
						</Grid>
						<Grid item xs={12}>
							<TextInput name="password" label="Password" onChange={formik.handleChange} margin = "normal" />
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
				{/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
			</Container>
		</ThemeProvider>
	)
}

{/* <form className="form" action="">
	<p className="form__fild-name">Email</p>
	<input placeholder="Enter your email" className="form__input" type="text"></input>

	<p className="form__fild-name">Password</p>
	<input placeholder="Enter your password" className="form__input" type="text"></input>

	<button className="form__button" type="submit">SIGN IN</button>
</form> */}