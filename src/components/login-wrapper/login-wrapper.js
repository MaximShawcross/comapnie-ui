import { LoginHeader } from '../login-header/login-header';
import { LoginForm } from '../login-form/login-form';

import './login-wrapper.scss';

export const LoginWrapper = () => {
	return (
		<div className="login-form">
			<LoginHeader/>
			<LoginForm/>
		</div>
	)
}