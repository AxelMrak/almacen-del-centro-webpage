/* eslint-disable react/prop-types */
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const props = {
	center: {
		lat: 33.6914754,
		lng: 65.4678895,
	},
	zoom: 11,
};

function Map() {
	return (
		<div style={{ height: "90vh", width: "60%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDovaGlL3mNx1ebXDpqh4sCJB35z8RKFdo" }}
				defaultCenter={props.center}
				defaultZoom={props.zoom}
			>
				<AnyReactComponent lat={33.6914754} lng={65.4678895} text="Almacén del centro" />
			</GoogleMapReact>
		</div>
	);
}

export default Map;
