import { SidebarButtonsList } from '../sidebar-buttons-list/sidebar-buttons-list'
import { SidebarHeader} from '../sidebar-header/sidebar-header';
import { SidebarProfile } from '../sidebar-profile/sidebar-profile'

import "./sidebar.scss";


export const Sidebar = () => {


	return (
		<section className="sidebar">
			<SidebarHeader />
			<SidebarProfile />
			<SidebarButtonsList />
		</section>
	)
}