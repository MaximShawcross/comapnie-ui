import { SidebarButton } from "../sidebar-button/sidebar-button"
import userIcon from "../../resources/icons/user-regular.svg"
import companiesIcons from '../../resources/icons/building-regular.svg'
import homeIcon from '../../resources/icons/house-solid.svg'
import logoutIcon from '../../resources/icons/arrow-right-from-bracket-solid.svg'
import { NavLink } from "react-router-dom"

import "./sidebar-buttons-list.scss"
import { useGetUserQuery } from "../../features/company-api.service"
import { Spinner } from "../spinner/spinner"

export const SidebarButtonsList = () => {
	const { data, isFetching } = useGetUserQuery("userDetails", {
		pollingInterval: 90000
	});

	const renderItems = () => {
		const { roles } = data;
		const isAdmin = roles.find(role => role === "admin");

		if ( isAdmin ) {
			return (
				<NavLink to="/users"
					className="button"
					style={({ isActive, isPending }) => {
						return {
							textDecoration: 'none'
						};
					}}
				>
					<SidebarButton name="Users" image={userIcon} />
				</NavLink>
			)
		}
	}

	const elements = isFetching ? <Spinner/> : renderItems();

	return (
		<nav className="sidebar__nav">
			<NavLink to="/"
				className="button"
				style={({ isActive, isPending }) => {
					return {
						background: isActive ? "#A700D0" : "inherit",
						borderRadius: "4px",
						textDecoration: 'none'
					};
				}}
			>
				<SidebarButton name="Home" image={homeIcon} />
			</NavLink>
			<NavLink to="/companies"
				className="button"
				style={({ isActive, isPending }) => {
					return {
						background: isActive ? "#A700D0" : "inherit",
						textDecoration: 'none',
						borderRadius: "4px",
					};
				}}
			>
				<SidebarButton name="Companies" image={companiesIcons} />
			</NavLink>
			{elements}


			<button className="sidebar__nav__item sidebar__nav__item_logout"
				onClick={() => {
					localStorage.clear();
					// eslint-disable-next-line no-restricted-globals
					location.reload();
				}}			
			>
				<img src={logoutIcon} alt="logout" className="sidebar__nav__item__icon"></img>
				<div className="sidebar__nav__item__title">Logout</div>
			</button>
		</nav>
	)
}