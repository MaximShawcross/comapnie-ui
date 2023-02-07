import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"
import { SingleCompany } from "../components/single-company/single-company"

export const SingleCompanyPage = () => {
	return (
		<div className="background_grey">
			<Sidebar/>
			<DashboardHeader/>
			<SingleCompany/>
		</div>
	)
} 