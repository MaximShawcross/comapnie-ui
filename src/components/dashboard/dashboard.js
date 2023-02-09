import { DashboardItem } from "../dashboard-item/dashboard-item";
import companieIcon from '../../resources/icons/building-regular.svg';
import { NavLink } from "react-router-dom";
import { useGetUserQuery } from "../../features/company-api.service";
import userIcon from "../../resources/icons/user-regular.svg"
import lockIcon from "../../resources/icons/lock-solid.svg"
import "./dashboard.scss";
import { Spinner } from "../spinner/spinner";

export const Dashboard = () => {
	const { data, isFetching } = useGetUserQuery("userDetails", {
		pollingInterval: 90000
	});

	const renderItem = () => {
		const { roles } = data;
		const isAdmin = roles.find(role => role === "admin");
		// console.log
		if (isAdmin) {
			return (
				<>
					<NavLink to="/users"
						style={({ isActive, isPending }) => {
							return {
								borderRadius: "4px",
								textDecoration: 'none'
							};
						}}
					>
						<DashboardItem name="Company" image={userIcon} />
					</NavLink>

					<NavLink to="/companies-admin"
						style={({ isActive, isPending }) => {
							return {
								borderRadius: "4px",
								textDecoration: 'none'
							};
						}}
					>
						<DashboardItem name="Company(adm)" image={lockIcon} />
					</NavLink>
				</>
			)
		}
	}
	const elements = isFetching ? <Spinner /> : renderItem();

	return (
		<div className="dashboard">
			<NavLink to="/companies"
				style={({ isActive, isPending }) => {
					return {
						borderRadius: "4px",
						textDecoration: 'none'
					};
				}}
			>
				<DashboardItem name="Company" image={companieIcon} />
			</NavLink>
			{elements}
		</div>
	)

}
