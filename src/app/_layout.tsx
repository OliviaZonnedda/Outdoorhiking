import { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Navbar from "@/modules/dashboard/components/Navbar";
import OpeningAnimation from "@/modules/dashboard/animations/OpeningAnimation";
import LoadingAnimation from "@/modules/dashboard/animations/LoadingAnimation";

export default function RootLayout() {
	const [step, setStep] = useState<"opening" | "loading" | "done">("opening");

	const showLoading = useCallback(() => setStep("loading"), []);
	const showApp = useCallback(() => setStep("done"), []);

	return (
		<View style={{ flex: 1 }}>
			<Stack screenOptions={{ headerShown: false }} />
			<Navbar />

			{step !== "done" && (
				<View style={styles.overlay}>
					{step === "opening" ? (
						<OpeningAnimation onFinish={showLoading} />
					) : (
						<LoadingAnimation onFinish={showApp} />
					)}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 10,
	},
});
