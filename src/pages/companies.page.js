import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from '../components/sidebar/sidebar';
import { CompanyTable } from "../components/companie-table/company-table";

export const CompaniesPage = () => {
	return (
		<>
			<Sidebar />
			<DashboardHeader />
			<CompanyTable />
		</>
	)
}