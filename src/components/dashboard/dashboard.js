import { DashboardItem } from "../dashboard-item/dashboard-item";
import userIcon from "../../resources/icons/user-regular.svg";
import companieIcon from '../../resources/icons/building-regular.svg';

import "./dashboard.scss";
import { useCallback, useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
			<NavLink to="/companies"
			style={({isActive, isPending}) => {
				return {
					background: isActive ? "#A700D0": "inherit",
					borderRadius: "4px",
					textDecoration: 'none'
				};
			}}
			>
				<DashboardItem name = "Company" number = {12} image = {companieIcon}/>
			</NavLink>
			<DashboardItem name = "Users" number = {5} image = {userIcon}/>
		</div>
	)
}
