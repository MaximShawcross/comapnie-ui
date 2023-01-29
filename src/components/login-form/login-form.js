import "./login-form.scss";

export const LoginForm = () => {
	return (
		<form className="form" action="">
			<p className="form__fild-name">Email</p>
			<input placeholder="Enter your email" className="form__input" type="text"></input>

			<p className="form__fild-name">Password</p>
			<input placeholder="Enter your password" className="form__input" type="text"></input>

			<button className="form__button" type="submit">SIGN IN</button>
		</form>
	)
}