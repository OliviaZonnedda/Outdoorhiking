import { View } from "react-native";
import { Stack } from "expo-router";
import Navbar from "@/modules/dashboard/components/Navbar";

export default function RootLayout() {
	return (
		<View style={{ flex: 1 }}>
			<Stack screenOptions={{ headerShown: false }} />
			<Navbar />
		</View>
	);
}
