import { HomePage, LoginPage, CompaniesPage, SignInPage, CompanyEditPage, CompanyCreatePage, UsersPage } from '../pages/index';
import { createBrowserRouter } from 'react-router-dom';
import { checkUserLoggedIn } from "../features/check.user.logged-in"
import { SingleCompanyPage } from '../pages/single.comapny.page';

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
	},
	{
		path: "/companies/view/:id",
		element: <SingleCompanyPage/>,
		loader: checkUserLoggedIn
	},
	{
		path: "/users",
		element: <UsersPage/>
	}
]);


