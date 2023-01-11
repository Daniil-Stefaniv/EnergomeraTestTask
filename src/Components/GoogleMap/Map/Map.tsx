import React, { useMemo } from "react";
import { FieldsDataType } from "../../AppTypes";
import { GoogleMap } from "@react-google-maps/api";
import MyMarker from "../MyMarker/MyMarker";
import MyPolygon from "../MyPoligon/MyPoligon";

type MapProps = {
	fieldsData: FieldsDataType;
};

const Map: React.FC<MapProps> = ({ fieldsData }) => {
	const center = useMemo(
		() => ({ lat: 45.3346801572646, lng: 42.2973787960476 }),
		[]
	);

	return (
		<GoogleMap
			zoom={9.45}
			center={center}
			mapContainerClassName="w-full h-full"
			mapTypeId={google.maps.MapTypeId.HYBRID}
		>
			{fieldsData.map((dataEl) => {
				const center = JSON.parse(dataEl.Location).Center;

				const pos = {
					lat: center[0],
					lng: center[1],
				};
				return <MyMarker key={0} pos={pos} labelVal={dataEl.Name} />;
			})}

			{fieldsData.map((dataEl) => {
				return (
					<MyPolygon
						key={dataEl.Id}
						pathsInfo={JSON.parse(dataEl.Location).Polygon}
					/>
				);
			})}
		</GoogleMap>
	);
};

export default Map;
