import { Marker } from "@react-google-maps/api";
import React from "react";

type MyMarkerProps = {
	pos: { lat: number; lng: number };
	labelVal: string;
};

const MyMarker: React.FC<MyMarkerProps> = ({ pos, labelVal }) => {
	const options = {
		marker: {
			type: "circle",
			draggable: false,
		},
		draggable: false,
	};

	const label = {
		text: labelVal,
		color: "#ffffff",
		fontSize: "12px",
	};

	return (
		<Marker
			icon={{
				path: "M2 2 H 40 V 20 H 2 L 2 2",
				fillColor: "#057E01",
				fillOpacity: 1,
				strokeColor: "#000",
				strokeWeight: 2,
				scale: 1,
				labelOrigin: new google.maps.Point(20, 10),
			}}
			label={label}
			options={options}
			position={pos}
		/>
	);
};

export default MyMarker;
