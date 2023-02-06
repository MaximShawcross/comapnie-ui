import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useGetCompaniesQuery } from "../../features/company-api.service";
import { CompanieTableItem } from "../company-table-item/company-table-item";
import { Spinner } from "../spinner/spinner";

export const CompanyTableList = () => {
	const dispatch = useDispatch();

	const {data, isFetching} = useGetCompaniesQuery("copmanies", {
		pollingInterval: 90000
	});

	const renderItems = () => {
		return data.map((item) => {
			return <CompanieTableItem 
			key = {nanoid()} name = {item.name}
			adress = {item.adress} serviceOfActivity = {item.serviceOfActivity}
			numberOfEmployees = {item.numberOfEmployees} description = {item.description}
			type = {item.type} 
		/>
		})		
	}

	const elements = isFetching ? <Spinner /> : renderItems();

	console.log(data);

	return (
		<>
			{elements}
		</>
	)
}