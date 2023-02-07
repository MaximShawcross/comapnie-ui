import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"
import { UsersTable } from "../components/users-table/users-table"

export const UsersPage = () => {
	return (
		<>
			<Sidebar />
			<DashboardHeader />
			<UsersTable />
		</>
	)
}