import HomeSvg from "../icons/home_button.svg";

type Props = { color?: string; size?: number };

export default function HomeIcon({ color = "#777", size = 28 }: Props) {
	return <HomeSvg width={size} height={size} color={color} />;
}
