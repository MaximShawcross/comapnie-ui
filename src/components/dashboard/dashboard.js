import { DashboardItem } from "../dashboard-item/dashboard-item";
import userIcon from "../../resources/icons/user-regular.svg";
import companieIcon from '../../resources/icons/building-regular.svg';

import "./dashboard.scss";
import { useEffect } from "react";

export const Dashboard = () => {


	return (
		<div className="dashboard">
			<DashboardItem name = "Company" number = {12} image = {companieIcon}/>
			<DashboardItem name = "Users" number = {5} image = {userIcon}/>
		</div>
	)
}
