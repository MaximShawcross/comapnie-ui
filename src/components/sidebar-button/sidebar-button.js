// import "./sidebar-button.scss";

export const SidebarButton = ({ name, image }) => {
	return (
		<button className="sidebar__nav__item">
			<img src={image} alt="button" className="sidebar__nav__item__icon"></img>
			<div className="">{name}</div>
		</button>
	)
}