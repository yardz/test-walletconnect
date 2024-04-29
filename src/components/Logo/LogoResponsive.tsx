"use client";

import { useIsMobile } from "@src/utils/useIsMobile";
import { Logo } from "./Logo";

interface Props {
	mobile: string;
	desktop: string;
}
export const LogoResponsive = ({ mobile, desktop }: Props) => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <Logo fontSize={mobile} />;
	}
	return <Logo fontSize={desktop} />;
};
