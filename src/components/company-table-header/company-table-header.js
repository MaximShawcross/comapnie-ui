import "./company-table-header.scss";

export const CompanyTableHeader = () => {
	return (
		<thead>
			<tr className="table-content__header">
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Name</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Address</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Service of activity</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Number of employees</div>
				</th> 
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Description</div>
				</th>
				<th className="table-content__header__item">
					<div className="table-content__header__item__text">Type</div>
				</th>
				<th className="table-content__header__item"></th>
				<th className="table-content__header__item"></th>
			</tr>
		</thead>
	)
}