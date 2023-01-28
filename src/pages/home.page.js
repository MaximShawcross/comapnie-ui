import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Dashboard } from "../components/dashboard/dashboard"
import { Sidebar } from "../components/sidebar/sidebar"

export const HomePage = () => {
	return (
		<>
			<Sidebar/>
			<DashboardHeader/>
			<Dashboard/>		
		</>
	)
}