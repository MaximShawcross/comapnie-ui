import { CompanyEditForm } from "../components/company-edit-form/company-edit-form"
import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"

export const UsersEditPage = () => {
	return (
		<div className="background_grey">
			<Sidebar/>
			<DashboardHeader/>
			<div className='form'> 
				<CompanyEditForm />
			</div>		
		</div>
	)
} 