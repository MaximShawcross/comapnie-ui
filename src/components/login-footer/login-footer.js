import { NavLink } from "react-router-dom";
import "./login-footer.scss";

export const LoginFooter = () => {
	return (
			<div className="register">Don't have an accout? 
			<NavLink 
				to={"/register"} 
				className="purple" 
				style={{textDecoration: "none"}}> Create it!
			</NavLink></div>

	)
}