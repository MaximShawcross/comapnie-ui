import { Sidebar } from "../components/sidebar/sidebar";
import { HomePage, LoginPage, CompaniesPage, SignInPage } from '../pages/index';
import { createBrowserRouter } from 'react-router-dom';
import "./app.scss";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/login",
		element: <LoginPage />
	},
	{
		path: "/companies",
		element: <CompaniesPage />
	},
	{
		path: "/register",
		element: <SignInPage />
	},
]);


