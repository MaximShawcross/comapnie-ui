import { CompanyAdminTableList } from "../company-admin-table-list/company-admin-table-list"
import { CompanyTableHeader } from "../company-table-header/company-table-header"
import { TableHeader } from "../table-header/table-header"

export const AdminCompanyTable = () => {
	return (
		<section className="companies">
			<TableHeader />
			<div className="devider"></div>
			<table className="table-content">
				<CompanyTableHeader />

				<tbody>
					<CompanyAdminTableList />
				</tbody>

			</table>

		</section>
	)
}