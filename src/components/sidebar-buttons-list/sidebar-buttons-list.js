import { SidebarButton } from "../sidebar-button/sidebar-button"
// import "./sidebar-buttons-list.scss"
import userIcon from "../../resources/icons/user-regular.svg"
import companiesIcons from '../../resources/icons/building-regular.svg'
import homeIcon from '../../resources/icons/house-solid.svg'
import logoutIcon from '../../resources/icons/arrow-right-from-bracket-solid.svg'

export const SidebarButtonsList = () => {
	return (
		<nav className="sidebar__nav">
			<SidebarButton name = "Home" image = { homeIcon }/>
			<SidebarButton name = "Companies" image = { companiesIcons }/>
			<SidebarButton name = "Users" image = { userIcon }/>

			<button className="sidebar__nav__item">
				<img src= {logoutIcon} alt = "logout" className="sidebar__nav__item__icon"></img>				
				<div className="sidebar__nav__item__title">Logout</div>				
			</button>
		</nav>
	)
}