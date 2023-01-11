import React, { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { FieldsDataType } from "./AppTypes";
import MyMap from "./GoogleMap/GoogleMapApi";

function App() {
	const URL =
		"http://agro.energomera.ru:3060/api/field?lastChangeDate=2022-01-01T10:00:00.000&skip=0&take=100";
	const [dataForFields, setDataForFields] = useState<
		FieldsDataType | undefined
	>(undefined);

	useEffect(() => {
		const getFieldData = async () => {
			const getData: AxiosResponse<FieldsDataType> = await axios.get(URL);
			const fieldsData: FieldsDataType = getData.data;
			console.log(JSON.parse(fieldsData[0].Location));
			setDataForFields(fieldsData);
		};

		getFieldData();
	}, []);

	return (
		<section className=" w-[100vw] h-[100vh]">
			{dataForFields ? (
				<MyMap markersData={dataForFields} />
			) : (
				<div className="w-full h-full flex items-center justify-center flex-col">
					<span className="owerflow-hidden w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-2">
						<span className=" w-8 h-8 rounded-full bg-white  relative">
							<span className="w-4 h-4 bg-white absolute top-7 left-2"></span>
							<span className="w-4 h-4 bg-white absolute top-2 -left-3"></span>
						</span>
					</span>
					<h1 className="font-bold text-2xl text-slate-700">
						Loading...
					</h1>
				</div>
			)}
		</section>
	);
}

export default App;
