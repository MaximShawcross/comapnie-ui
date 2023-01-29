import "./company-table-header.scss";

export const CompanyTableHeader = () => {
	return (
		<thead>
			<tr className="table-content__header">
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Name</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Payment Schedule</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Bill Number</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Amount Paid</div>
				</th> 
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Balance amount</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Date</div>
				</th>
				<th className="table-content__header__item"></th>
				<th className="table-content__header__item"></th>
			</tr>
		</thead>
	)
}