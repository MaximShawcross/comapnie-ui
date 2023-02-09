import { CompanyTableHeader } from '../company-table-header/company-table-header';
import { CompanyTableList } from "../company-table-list/company-table-list";
import "./company-table.scss";
import { TableHeader } from '../table-header/table-header';

export const CompanyTable = () => {
	return (
		<section className="companies">
			<TableHeader />
			<div className="devider"></div>
			<table className="table-content">
				<CompanyTableHeader />

				<tbody>
					<CompanyTableList />
				</tbody>

			</table>

		</section>
	)
}
