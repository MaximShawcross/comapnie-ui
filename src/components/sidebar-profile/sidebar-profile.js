// import "./sidebar-profile.scss";
import profile from '../../resources/profile/profile.png';

export const SidebarProfile = () => {
	return (
		<div className="sidebar__profile">
			<img src= {profile} alt="User" className="sidebar__profile__image"></img>
			<p className="sidebar__profile__name">Karthi Madesh</p>
			<div className="sidebar__profile__role">Admin</div>
		</div>
	)
}