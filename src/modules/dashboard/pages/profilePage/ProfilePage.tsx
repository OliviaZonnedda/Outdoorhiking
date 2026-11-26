import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>My profile</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", backgroundColor: "white" },
	title: { fontSize: 24, fontWeight: "bold", marginTop: 24, color: "black" },
});
