import { HomePage, LoginPage, CompaniesPage, SignInPage, CompanyEditPage, CompanyCreatePage } from '../pages/index';
import { createBrowserRouter, redirect } from 'react-router-dom';
import "./app.scss";
import { checkUserLoggedIn } from "../features/check.user.logged-in"
import { store } from "../app/store"
import { CompanyCreateForm } from '../components/company-create-form/company-create-form';
export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		loader: checkUserLoggedIn
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/companies",
		element: <CompaniesPage />,
		loader: checkUserLoggedIn
		
	},
	{
		path: "/register",
		element: <SignInPage />,
	},
	{
		path: "/companies/edit/:id",
		element: <CompanyEditPage />,
		loader: checkUserLoggedIn
	},
	{
		path: "/companies/create",
		element: <CompanyCreatePage />,
		loader: checkUserLoggedIn
	}
]);


