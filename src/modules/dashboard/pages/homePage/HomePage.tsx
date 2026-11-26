import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomePage() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}
		>
			<Text style={{ fontSize: 30, color: "black" }}>Outdoorhiking</Text>
			<Text style={{ fontSize: 30, color: "black" }}>FOLLIE</Text>
			<Link
				href="../map"
				style={{ marginTop: 20, fontSize: 20, color: "blue" }}
			>
				Open map
			</Link>
		</View>
	);
}
