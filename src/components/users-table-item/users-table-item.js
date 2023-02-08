import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { selectById } from "../../features/users/users.slice"

import vectorIcon from '../../resources/icons/Vector.png';
import pencilIcon from "../../resources/icons/pen.png";
import "./users-table-item.scss";

export const UsersTableItem = ({ id }) => {
	const user = useSelector(state => selectById(state, id));

	const {
		email, password,
		first_name, last_name, 
		nick_name, phone_number, 
		position, description
	} = user

	return (
		<tr className="table-content__row">
			<td className="table-content__body__item">{email}</td>
			<td className="table-content__body__item">{password}</td>
			<td className="table-content__body__item">{first_name} </td>
			<td className="table-content__body__item">{last_name}</td>
			<td className="table-content__body__item">{nick_name}</td>
			<td className="table-content__body__item">{phone_number}</td>
			<td className="table-content__body__item">{position}</td>
			<td className="table-content__body__item">{description}</td>
			<td className="table-content__body__item">
				<NavLink to = {`/users/edit/${id}`} >
					<img className="table-content__body__item__button__icon__pencil" src= {pencilIcon} alt="pencil"></img>
				</NavLink>
			</td>
			<td className="table-content__body__item">
				<NavLink to = {`/companies/view/${id}`} >
					<img className = "table-content__body__item__button__icon"src= {vectorIcon} alt="Vector"></img>
				</NavLink>
			</td>
		</tr>
	)
}