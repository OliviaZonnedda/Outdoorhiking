import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "./icons/HomeIcon";
import MapIcon from "./icons/MapIcon";
import ProfileIcon from "./icons/ProfileIcon";
/**import { Ionicons } from "@react-native-vector-icons/ionicons";*/

export default function Navbar() {
	const pathname = usePathname();
	const insets = useSafeAreaInsets();

	const goTo = (href: "/" | "/map" | "/profile") => {
		if (pathname !== href) router.replace(href);
	};

	return (
		<View style={[styles.wrapper, { paddingBottom: insets.bottom + 6 }]}>
			<View style={styles.navbar}>
				<Pressable
					style={styles.item}
					onPress={() => goTo("/")}
					accessibilityLabel="Home"
				>
					<HomeIcon size={25} color="#000" />
				</Pressable>

				<Pressable
					style={styles.item}
					onPress={() => goTo("/map")}
					accessibilityLabel="Map"
				>
					<MapIcon size={27} color="#000" />
				</Pressable>

				<Pressable
					style={styles.item}
					onPress={() => goTo("/profile")}
					accessibilityLabel="Profile"
				>
					<ProfileIcon size={25} color="#000" />
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		paddingHorizontal: 20,
		backgroundColor: "transparent",
	},
	navbar: {
		height: 52,
		flexDirection: "row",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#777",
		borderRadius: 26,
		boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)",
	},
	item: { flex: 1, alignItems: "center", justifyContent: "center" },
	avatar: { width: 36, height: 36, borderRadius: 18 },
});
