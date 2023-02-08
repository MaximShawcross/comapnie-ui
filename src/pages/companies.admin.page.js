import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from '../components/sidebar/sidebar';
import { CompanyTable } from "../components/company-table/company-table";
import { CompanyAdminTableList } from "../components/company-admin-table-list/company-admin-table-list";
import { AdminCompanyTable } from "../components/company-admin-table/company-admin-table";

export const CompaniesAdminPage = () => {
	return (
		<>
			<Sidebar />
			<DashboardHeader />
			<AdminCompanyTable />
		</>
	)
}