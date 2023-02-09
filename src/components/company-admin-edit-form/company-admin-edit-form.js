import { ThemeProvider } from '@emotion/react';
import { Button, createTheme, CssBaseline, Grid, Typography, Box, Container } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateAdminCompanyMutation } from '../../features/company-api.service';
import { selectById } from '../../features/company/admin.company.slice';
import { TextInput } from '../text-input/text-input';
import "./company-edit-form.scss";

const theme = createTheme();

export const CompanyAdminEditForm = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const company  = useSelector(state => selectById(state, id));

	const [
		updateAdminCompany,
		{isLoading, isSuccess}
	] = useUpdateAdminCompanyMutation();

	const formik = useFormik({
		initialValues: {
			name: company.name,
			adress: company.adress,
			serviceOfActivity: company.serviceOfActivity,
			numberOfEmployees: company.numberOfEmployees,
			description: company.description,
			type: company.type
		},
		onSubmit: async (companyParam) => {
			updateAdminCompany({ id, ...companyParam });

			if ( companyParam ) {
				return navigate("/companies-admin");
			}
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
						Edit Company
					</Typography>
					<Box component="form" onSubmit={formik.handleSubmit} noValidate 
						sx={{ mt: 1, width: 600 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextInput name="name" label="name" onChange={formik.handleChange} margin="dense" />
							</Grid>
							<Grid item xs={12}>
								<TextInput name="adress" label="adress" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="numberOfEmployees" label="numberOfEmployees" onChange={formik.handleChange} margin="dense"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextInput name="type" label="type" onChange={formik.handleChange} margin="dense"/>

							</Grid>

							<Grid item xs={12}>
								<TextInput name="serviceOfActivity" label="serviceOfActivity" onChange={formik.handleChange} margin="dense"/>
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
