import "./company-table-item.scss";
import vectorIcon from '../../resources/icons/Vector.png';

export const CompanieTableItem = () => {
	return (
		<tr className="table-content__row">
			<td className="table-content__body__item">Karthi</td>
			<td className="table-content__body__item">First</td>
			<td className="table-content__body__item">00012223 </td>
			<td className="table-content__body__item">INR 35,000</td>
			<td className="table-content__body__item">INR 55,000</td>
			<td className="table-content__body__item">08-Dec, 2021</td>
			<td className="table-content__body__item">
				<img className="table-content__body__item__img"	src="./resources/pencil.png" alt=""></img>
			</td>
			<td className="table-content__body__item">
				<button className="table-content__body__item__button">
					<img className = "table-content__body__item__button__icon"src= {vectorIcon} alt="Vector"></img>
				</button>
			</td>
		</tr>
	)
}