import "./company-table-item.scss";
import vectorIcon from '../../resources/icons/Vector.png';
import pencilIcon from "../../resources/icons/pen.png";

export const CompanieTableItem = (companyDetails) => {
	const {
		name, adress,
		serviceOfActivity, numberOfEmployees, 
		description, type
	} = companyDetails;
	
	return (
		<tr className="table-content__row">
			<td className="table-content__body__item">{name}</td>
			<td className="table-content__body__item">{adress}</td>
			<td className="table-content__body__item">{serviceOfActivity} </td>
			<td className="table-content__body__item">{numberOfEmployees}</td>
			<td className="table-content__body__item">{description}</td>
			<td className="table-content__body__item">{type}</td>
			<td className="table-content__body__item">
				<button className="table-content__body__item__button">
					<img className="table-content__body__item__button__icon__pencil" src= {pencilIcon} alt="pencil"></img>
					
				</button>
			</td>
			<td className="table-content__body__item">
				<button className="table-content__body__item__button">
					<img className = "table-content__body__item__button__icon"src= {vectorIcon} alt="Vector"></img>
				</button>
			</td>
		</tr>
	)
}