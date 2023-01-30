import { ThemeProvider } from "@emotion/react";

import { 
	Avatar, Box, Button, Checkbox, Container, FormControl, 
	createTheme, CssBaseline, FormControlLabel, InputLabel,
	Grid, Link, TextField, Typography, Select, MenuItem 
} from "@mui/material";

import React, { useState } from "react";

const theme = createTheme();

export const SignUpForm = () => {
	const [role, setRole] = useState("");

	const handleRoleChange = (e) => {
		setRole(e.target.value);
	}

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
					<Box component="form" noValidate onSubmit={() => console.log(1)} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									size="small"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									size="small"
									
								/>
							</Grid>
							
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="phone-number"
									name="phone-number"
									required
									fullWidth
									id="phoneNumber"
									label="Phone Number"
									autoFocus
									size="small"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="nick-name"
									label="Nick Name"
									name="nickName"
									autoComplete="Nick Name"
									size="small"
									
								/>
							</Grid>
							
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									size="small"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									size="small"
								/>
							</Grid>
							<Grid item xs={12}>
							<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value= {role}
									label="Position"
									size="small"
									onChange={handleRoleChange}
								>
									<MenuItem value="Junior">Junior</MenuItem>
									<MenuItem value="Middle">Middle</MenuItem>
									<MenuItem value="Sinior">Senior</MenuItem>
								</Select>
							</FormControl>
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