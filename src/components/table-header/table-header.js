import bellIcon from '../../resources/icons/bell-regular.svg';

import "./table-header.scss";

export const TableHeader = () => {
	return (
		<div className="companies__header">
			<div className="companies__header__item">Payment Details</div>
			<img className="companies__header__icon" src={bellIcon} alt="header icon"></img>
		</div>
	)
}