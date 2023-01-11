import { Polygon } from "@react-google-maps/api";
import React from "react";

type MyPoligonProps = {
	pathsInfo: number[][];
};

const MyPolygon: React.FC<MyPoligonProps> = ({ pathsInfo }) => {
	const pathArr: { lat: number; lng: number }[] = [];

	if (pathsInfo) {
		pathsInfo.map((info): void => {
			const pointGeo = { lat: info[0], lng: info[1] };
			pathArr.push(pointGeo);
		});
	}

	return (
		<Polygon
			editable={false}
			draggable={false}
			options={{
				strokeWeight: 2,
				strokeOpacity: 1,
				fillColor: "	#FFFFFF",
				fillOpacity: 0,
				strokeColor: "#FFFFFF",
			}}
			paths={[pathArr]}
		/>
	);
};

export default MyPolygon;
