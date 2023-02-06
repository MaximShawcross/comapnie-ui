import {store} from "../app/store"
import { redirect } from 'react-router-dom';

export const checkUserLoggedIn = async () => {
	const userInfo = store.getState().auth.userInfo;
	
	if (!userInfo) {
		throw redirect("/login")
	}
	
	return null;
}