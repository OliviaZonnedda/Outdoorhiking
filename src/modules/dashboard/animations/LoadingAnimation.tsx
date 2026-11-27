import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = { onFinish: () => void };

export default function LoadingAnimation({ onFinish }: Props) {
	useEffect(() => {
		const timer = setTimeout(onFinish, 2300);
		return () => clearTimeout(timer);
	}, [onFinish]);

	return (
		<View style={styles.container}>
			<Image
				source={require("../components/animation_assets/Comp_2.gif")}
				style={styles.gif}
				contentFit="contain"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#F2FE76" },
	gif: { width: "100%", height: "100%" },
});
