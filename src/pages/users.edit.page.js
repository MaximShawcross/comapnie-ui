import { CompanyEditForm } from "../components/company-edit-form/company-edit-form"
import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"
import { UsersEditForm } from "../components/users-edit-form/users-edit-form"

export const UsersEditPage = () => {
	return (
		<div className="background_grey">
			<Sidebar/>
			<DashboardHeader/>
			<div className='form'> 
				<UsersEditForm />
			</div>		
		 </div>
	)
} 