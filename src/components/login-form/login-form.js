import "./login-form.scss";

export const LoginForm = () => {
	return (
		<form class="form" action="">
			<p class="form__fild-name">Email</p>
			<input placeholder="Enter your email" class="form__input" type="text"></input>

			<p class="form__fild-name">Password</p>
			<input placeholder="Enter your password" class="form__input" type="text"></input>

			<button class="form__button" type="submit">SIGN IN</button>
		</form>
	)
}