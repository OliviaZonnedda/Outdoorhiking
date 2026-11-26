import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "./icons/HomeIcon";
import MapIcon from "./icons/MapIcon";
import ProfileIcon from "./icons/ProfileIcon";
import { Ionicons } from "@react-native-vector-icons/ionicons";

const links = [
	{ label: "Home", href: "/", Icon: HomeIcon },
	{ label: "Map", href: "/map", Icon: MapIcon },
	{ label: "Profile", href: "/profile", Icon: ProfileIcon },
] as const;

export default function Navbar() {
	const pathname = usePathname();
	const insets = useSafeAreaInsets();

	return (
		<View style={[styles.navbar, { paddingBottom: insets.bottom }]}>
			{links.map((link) => {
				const active = pathname === link.href;

				return (
					<Pressable
						key={link.href}
						style={styles.item}
						onPress={() => {
							if (!active) router.replace(link.href);
						}}
					>
						{link.href === "/" ? (
							<HomeIcon size={28} color={active ? "#2e7d32" : "#777"} />
						) : (
							<link.Icon size={28} color={active ? "#2e7d32" : "#777"} />
						)}
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		flexDirection: "row",
		backgroundColor: "white",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
	item: { flex: 1, alignItems: "center", paddingVertical: 16 },
	label: { fontSize: 16, color: "#777" },
	activeLabel: { color: "#2e7d32", fontWeight: "bold" },
});
