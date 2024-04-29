import { useLayoutEffect, useState } from "react";
import { useDebounce } from "./debounce";

export const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState(false);
	const debouncedIsMobile = useDebounce(isMobile, 500);

	useLayoutEffect(() => {
		const updateSize = (): void => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", updateSize);
		return (): void => window.removeEventListener("resize", updateSize);
	}, []);

	return debouncedIsMobile;
};
