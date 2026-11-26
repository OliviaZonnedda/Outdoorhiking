import { Camera, Map, Marker } from "@maplibre/maplibre-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { supabase } from "../../../../../supabase";
import type { MapStyle } from "./mapStyle";
import { loadMapStyle } from "./mapStyle";

type SoundworkPin = {
	id: string;
	title: string;
	sound_number: number;
	lat: number;
	lng: number;
};

export default function MapPage() {
	const [soundworks, setSoundworks] = useState<SoundworkPin[]>([]);
	const [mapStyle, setMapStyle] = useState<MapStyle | null>(null);
	const [error, setError] = useState("");

	useEffect(() => {
		loadMapStyle().then(setMapStyle);
	}, []);

	useEffect(() => {
		supabase
			.from("soundworks")
			.select("id, title, sound_number, lat, lng")
			.order("sound_number")
			.then(({ data, error }) => {
				if (error) setError(error.message);
				else setSoundworks(data as SoundworkPin[]);
			});
	}, []);

	if (!mapStyle) return <ActivityIndicator style={styles.container} />;

	return (
		<View style={styles.container}>
			<Map
				style={styles.map}
				mapStyle={mapStyle}
				attributionPosition={{ bottom: -20, right: 8 }}
				logoPosition={{ bottom: -20, left: 8 }}
			>
				<Camera
					initialViewState={{
						center: [4.405312969674075, 51.18288775122403],
						zoom: 14,
					}}
				/>

				{soundworks.map((sw) => (
					<Marker key={sw.id} lngLat={[sw.lng, sw.lat]}>
						<View style={styles.pin}>
							<Text style={styles.pinText}>{sw.sound_number}</Text>
						</View>
					</Marker>
				))}
			</Map>

			{error !== "" && <Text style={styles.error}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	map: { flex: 1 },
	pin: {
		minWidth: 32,
		height: 32,
		paddingHorizontal: 6,
		borderRadius: 16,
		backgroundColor: "#df4e4e",
		borderWidth: 2,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	pinText: { color: "white", fontWeight: "600" },
	error: {
		position: "absolute",
		top: 60,
		alignSelf: "center",
		padding: 8,
		backgroundColor: "white",
		color: "#ffffff",
	},
});
