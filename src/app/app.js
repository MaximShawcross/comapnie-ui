import { HomePage, LoginPage, CompaniesPage, SignInPage } from '../pages/index';
import { createBrowserRouter, redirect } from 'react-router-dom';
import "./app.scss";
import { useSelector } from 'react-redux';
import { store } from './store';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		loader: async () => {
			const userInfo = store.getState().auth.userInfo;
			
			if (!userInfo) {
				throw redirect("/login")
			}
			return null;
		}
	},
	{
		path: "/login",
		element: <LoginPage />,
		// loader: async () => {
		// 	const userInfo = store.getState().auth.userInfo;
			
		// 	if (userInfo) {
		// 		throw redirect("/")
		// 	}
		// 	return null;
		// }
	},
	{
		path: "/companies",
		element: <CompaniesPage />,
		loader: async () => {
			const userInfo = store.getState().auth.userInfo;
			
			if (!userInfo) {
				throw redirect("/login")
			}
			return null;
		}
		
	},
	{
		path: "/register",
		element: <SignInPage />,
		// loader: async () => {
		// 	const userInfo = store.getState().auth.userInfo;
			
		// 	if (userInfo) {
		// 		throw redirect("/")
		// 	}
		// 	return null;
		// }
	},
]);


