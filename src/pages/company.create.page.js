import { CompanyCreateForm } from "../components/company-create-form/company-create-form"
import { CompanyEditForm } from "../components/company-edit-form/company-edit-form"
import { DashboardHeader } from "../components/dashboard-header/dashboard-header"
import { Sidebar } from "../components/sidebar/sidebar"

export const CompanyCreatePage = () => {
	return (
		<div className="background_grey">
			<Sidebar/>
			<DashboardHeader/>
			<div className='form'> 
				<CompanyCreateForm />
			</div>		
		</div>
	)
} 