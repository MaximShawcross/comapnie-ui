import "./company-table-item.scss";
import vectorIcon from '../../resources/icons/Vector.png';
import pencilIcon from "../../resources/icons/pen.png";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectById } from "../../features/company/company.slice";

export const CompanieTableItem = ({id}) => {
	const copanyId = useSelector(state => selectById(state, id));

	const {
		name, adress,
		serviceOfActivity, numberOfEmployees, 
		description, type
	} = copanyId;
	
	return (
		<tr className="table-content__row">
			<td className="table-content__body__item">{name}</td>
			<td className="table-content__body__item">{adress}</td>
			<td className="table-content__body__item">{serviceOfActivity} </td>
			<td className="table-content__body__item">{numberOfEmployees}</td>
			<td className="table-content__body__item">{description}</td>
			<td className="table-content__body__item">{type}</td>
			<td className="table-content__body__item">
				{/* <button className="table-content__body__item__button"> */}
					<NavLink to = {`/companies/edit/${id}`} >
						<img className="table-content__body__item__button__icon__pencil" src= {pencilIcon} alt="pencil"></img>
					</NavLink>
				{/* </button> */}
			</td>
			<td className="table-content__body__item">
				<NavLink to = {`/companies/view/${id}`} >
						<img className = "table-content__body__item__button__icon"src= {vectorIcon} alt="Vector"></img>
				</NavLink>
			</td>
		</tr>
	)
}