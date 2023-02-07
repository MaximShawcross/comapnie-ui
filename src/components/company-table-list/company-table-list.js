import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCompaniesQuery } from "../../features/company-api.service";
import { CompanieTableItem } from "../company-table-item/company-table-item";
import { selectIds, setComapnyList } from "../../features/company/company.slice"


export const CompanyTableList = () => {
	const dispatch = useDispatch();
	const companies = useSelector(state => selectIds(state));

	const {data, isFetching, refetch} = useGetCompaniesQuery("copmanies", {
		pollingInterval: 90000
	});
	
	useEffect(() => {
		if (data) {
			dispatch(setComapnyList(data));
		}

		refetch();
	}, [data, dispatch, refetch]);

	const renderItems = () => {
		return companies.map((id) => (
			<CompanieTableItem key = {nanoid()} id = {id}/>
		));
	}

	const elements = isFetching ? null: renderItems();

	// console.log(data);

	return (
		<>
			{elements}
		</>
	)
}