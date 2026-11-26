import ProfileSvg from "../icons/profile_button.svg";

type Props = { color?: string; size?: number };

export default function ProfileIcon({ color = "#777", size = 28 }: Props) {
	return <ProfileSvg width={size} height={size} color={color} />;
}
