import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import "./GoogleMapStyle.css";
import { FieldsDataType } from "../AppTypes";
import Map from "./Map/Map";

type MyMapProps = {
	markersData: FieldsDataType;
};

const MyMap: React.FC<MyMapProps> = ({ markersData }) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyCnV2OBwvj0J990FYK1EsWG0H1GT0tNmT0",
	});

	return !isLoaded ? <></> : <Map fieldsData={markersData} />;
};

export default MyMap;
