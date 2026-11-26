import MapSvg from "../icons/map_button.svg";

type Props = { color?: string; size?: number };

export default function MapIcon({ color = "#777", size = 28 }: Props) {
	return <MapSvg width={size} height={size} color={color} />;
}
