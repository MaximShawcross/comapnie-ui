import { SidebarButton } from "../sidebar-button/sidebar-button"
import userIcon from "../../resources/icons/user-regular.svg"
import companiesIcons from '../../resources/icons/building-regular.svg'
import homeIcon from '../../resources/icons/house-solid.svg'
import logoutIcon from '../../resources/icons/arrow-right-from-bracket-solid.svg'
import { Link, NavLink } from "react-router-dom"

import "./sidebar-buttons-list.scss"

export const SidebarButtonsList = () => {
	return (
		<nav className="sidebar__nav">
			<NavLink to="/"
			className="button"	
				style={({isActive, isPending}) => {
					return {
						background: isActive ? "#A700D0": "inherit",
						borderRadius: "4px",
						textDecoration: 'none'
					};
				}}
			>
				<SidebarButton name="Home" image={homeIcon} />
			</NavLink>
			<NavLink to="/companies"
			className="button"	
				style={({isActive, isPending}) => {
					return {
						background: isActive ? "#A700D0": "inherit",
						textDecoration: 'none',
						borderRadius: "4px",
					};
				}}
			>
				<SidebarButton name="Companies" image={companiesIcons} />
			</NavLink>
			<NavLink to="/users" 
				className="button"	
				style={({isActive, isPending}) => {
					return {
						// background: isActive ? "#A700D0": "inherit",
						// borderRadius: "4px",
						textDecoration: 'none'
					};
				}}
			>
				<SidebarButton name="Users" image={userIcon} />
			</NavLink>

			<SidebarButton name="Users" image={userIcon} />

			<button className="sidebar__nav__item">
				<img src={logoutIcon} alt="logout" className="sidebar__nav__item__icon"></img>
				<div className="sidebar__nav__item__title">Logout</div>
			</button>
		</nav>
	)
}