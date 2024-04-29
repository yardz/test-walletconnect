import { NextResponse, NextRequest } from "next/server";
import { isAddress } from "web3-validator";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	if (request.nextUrl.pathname.startsWith("/address")) {
		const path = pathname.split("/").filter((p) => !!p);
		if (path.length > 1) {
			const address = path[1];
			if (!isAddress(address)) {
				const query = new URLSearchParams({ address }).toString();
				const url = `/address?${query}`;
				return NextResponse.redirect(new URL(url, request.url));
			}
		}
	}

	return NextResponse.next();
}
