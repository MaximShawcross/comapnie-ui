import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useGetUsersListQuery } from "../../features/company-api.service";
import { selectIds, setUsersList } from "../../features/users/users.slice";
import { UsersTableItem } from "../users-table-item/users-table-item";

export const UsersTableList = () => {
	const dispatch = useDispatch();
	const users = useSelector(state => selectIds(state));

	const { data, isFetching, refetch } = useGetUsersListQuery("users", {
		pollingInterval: 90000
	});

	useEffect(() => {
		if (data) {
			dispatch(setUsersList(data));
		}

		refetch();
	}, [data, dispatch, refetch]);

	const renderItems = () => {
		return users.map((id) => (
			<UsersTableItem key = {nanoid()} id ={id} />
		))
	};

	const elements = isFetching ? null : renderItems();

	return (
		<>
			{elements}
		</>
	)
}