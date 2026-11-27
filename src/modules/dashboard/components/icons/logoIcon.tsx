import LogoSvg from "../icons/logo_follie.svg";

type Props = { size?: number };

export default function LogoIcon({ size = 150 }: Props) {
	return <LogoSvg width={size} height={size} />;
}
