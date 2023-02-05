// import "./sidebar-profile.scss";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../features/auth/auth.service';
import { setCredentials } from '../../features/auth/auth.slice';

import profile from '../../resources/profile/profile.png';
import { Spinner } from '../spinner/spinner';

export const SidebarProfile = () => {
	const dispatch = useDispatch();

	const { data, isFetching } = useGetUserQuery("userDetails", {
		pollingInterval: 90000
	});

	console.log(data);

	useEffect(() => {
		if (data) {
			dispatch(setCredentials(data))
			// return;
		}

	}, [data, dispatch]);

	const renderItems = () => {
		const { last_name, first_name, roles } = data;
		const isAdmin = roles.find(role => role === "admin");

		const userRole = isAdmin ? "Admin" : "User"	;	
		const userName = `${first_name} ${last_name}`;
		
		return (
			<>
				<img src={profile} alt="User" className="sidebar__profile__image"></img>
				<p className="sidebar__profile__name">{userName}</p>
				<div className="sidebar__profile__role">{userRole}</div>
			</>
		)
	}

	const elements = isFetching ? <Spinner/> : renderItems();

	return (
		<div className="sidebar__profile">
			{elements}
		</div>
	)
}