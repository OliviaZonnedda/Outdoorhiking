import { useEffect, useRef } from "react";
import {
	View,
	Text,
	Animated,
	Easing,
	Platform,
	StyleSheet,
} from "react-native";
import LogoIcon from "../components/icons/logoIcon";

type Props = { onFinish: () => void };

export default function OpeningAnimation({ onFinish }: Props) {
	const scale = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const useNative = Platform.OS !== "web";

		const animation = Animated.sequence([
			Animated.timing(scale, {
				toValue: 1,
				duration: 500,
				easing: Easing.out(Easing.back(1.7)),
				useNativeDriver: useNative,
			}),
			Animated.delay(2000),
			Animated.timing(scale, {
				toValue: 0,
				duration: 400,
				easing: Easing.back(1.7),
				useNativeDriver: useNative,
			}),
		]);

		animation.start(({ finished }) => {
			if (finished) onFinish();
		});

		return () => animation.stop();
	}, [onFinish, scale]);

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.content, { transform: [{ scale }] }]}>
				<LogoIcon size={150} />
				<Text style={styles.title}>Outdoorhiking</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F2FE76",
	},
	content: {
		alignItems: "center",
	},
	title: {
		marginTop: 14,
		fontSize: 20,
		fontWeight: "bold",
		fontStyle: "italic",
		color: "#000",
	},
});
