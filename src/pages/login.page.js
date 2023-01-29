import { LoginWrapper } from '../components/login-wrapper/login-wrapper';
import { LoginFooter } from '../components/login-footer/login-footer';

import "../components/login-form/login-form.scss";

export const LoginPage = () => {
	return (
		<div className="background">
			<LoginWrapper/>
			<LoginFooter/>
		</div>
	)
}
