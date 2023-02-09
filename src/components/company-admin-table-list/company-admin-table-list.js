import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetEveryCompaniesQuery } from "../../features/company-api.service";
import { selectIds, setAdminComapnyList } from "../../features/company/admin.company.slice";
import { CompanieAdminTableItem } from "../company-admin-table-item/company-admin-table-item";

export const CompanyAdminTableList = () => {
	const dispatch = useDispatch();
	const companies = useSelector(state => selectIds(state));

	const {data, isFetching, refetch} = useGetEveryCompaniesQuery("admin/companies", {
		pollingInterval: 90000
	});

	useEffect(() => {
		if (data) {
			dispatch(setAdminComapnyList(data));
		}
		console.log(data)
		refetch();
	}, [data, dispatch, refetch]);

	const renderItems = () => {
		return companies.map((id) => (
			<CompanieAdminTableItem key = {nanoid()} id = {id} />
		));
	}

	const elements = isFetching ? null: renderItems();

	return (
		<>
			{elements}		
		</>
	)
}