import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectById } from "../../features/company/company.slice";
import "./single-company.scss";

export const SingleCompany = () => {
	const {id} = useParams();
	const company = useSelector(state => selectById(state, id));

	const {
		name, adress,
		serviceOfActivity, numberOfEmployees, 
		description, type
	} = company;

	return (
		<div className="single-company">
			<div className="single-company__item"><span className="single-company__item__span">Name</span>: {name}</div>
			<div className="single-company__item"><span className="single-company__item__span">Adress</span>: {adress}</div>
			<div className="single-company__item"><span className="single-company__item__span">Number</span> Of Employees: {serviceOfActivity}</div>
			<div className="single-company__item"><span className="single-company__item__span">type</span>: {type}</div>
			<div className="single-company__item"><span className="single-company__item__span">Service of Activity</span>: {numberOfEmployees}</div>
			<div className="single-company__item"><span className="single-company__item__span">Description</span>: {description}</div>
		</div>
	)
}