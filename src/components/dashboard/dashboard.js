import { DashboardItem } from "../dashboard-item/dashboard-item";
import userIcon from "../../resources/icons/user-regular.svg";
import companieIcon from '../../resources/icons/building-regular.svg';

import "./dashboard.scss";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Dashboard = () => {
	const userInfo = useSelector((state) => state.userInfo);
	const navigate = useNavigate();
	
	// useEffect(() => {
	// 	if (!userInfo) {
	// 		navigate("/login");
	// 	}
	// }, [userInfo, navigate]);

	return (
		<div className="dashboard">
			<DashboardItem name = "Company" number = {12} image = {companieIcon}/>
			<DashboardItem name = "Users" number = {5} image = {userIcon}/>
		</div>
	)
}
