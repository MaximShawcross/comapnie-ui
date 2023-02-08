import { CompanyAdminEditForm } from "../components/company-admin-edit-form/company-admin-edit-form"
import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"

export const CompanyAdminEditPage = () => {
	return (
		<div className="background_grey">
			<Sidebar/>
			<DashboardHeader/>
			<div className='form'> 
				<CompanyAdminEditForm />
			</div>		
		</div>
	)
} 