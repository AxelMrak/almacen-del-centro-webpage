/* eslint-disable react/prop-types */
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const props = {
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
				bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
				defaultCenter={props.center}
				defaultZoom={props.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
}

export default Map;
