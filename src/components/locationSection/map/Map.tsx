import React from "react";
import GoogleMapReact from "google-map-react";

interface PropsMarker {
	text: string;
}

const AnyReactComponent = ({ text }: PropsMarker) => <div>{text}</div>;

interface CenterMap {
  lat: number,
  lng: number
}

interface PropsMap {
	center: CenterMap;
	zoom: number;
}

const props: PropsMap = {
	center: {
		lat: 10.99835602,
		lng: 77.01502627,
	},
	zoom: 11,
};

function Map() {
	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDovaGlL3mNx1ebXDpqh4sCJB35z8RKFdo" }}
				defaultCenter={props.center}
				defaultZoom={props.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
}

export default Map;
