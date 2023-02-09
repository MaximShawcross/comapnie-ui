import { NavLink } from 'react-router-dom';
import plusIcon from "../../resources/icons/plus-solid.svg";
import "./table-header.scss";

export const TableHeader = () => {
	return (
		<div className="companies__header">
			<div className="companies__header__item">Companies</div>
			<NavLink to= "/companies/create" style={{textDecoration: "none"}}>
				<img className="companies__header__icon" src={plusIcon} alt="header icon"></img>
			</NavLink>
		</div>
	)
}