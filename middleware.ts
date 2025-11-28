import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const adminPath = "/admin-network-console-byn-2025";

    // Only run on admin paths
    if (url.pathname.startsWith(adminPath)) {
        // Allow access to login page
        if (url.pathname === `${adminPath}/login`) {
            return NextResponse.next();
        }

        // Check for admin token
        const token = req.cookies.get("byn_admin_token")?.value;

        if (!token) {
            // Redirect to login if no token
            url.pathname = `${adminPath}/login`;
            return NextResponse.redirect(url);
        }

        try {
            // Verify token
            // Note: We can't use process.env.ADMIN_JWT_SECRET directly in middleware on some platforms
            // without specific config, but for standard Next.js it usually works.
            // If it fails, we catch the error and redirect.
            if (!process.env.ADMIN_JWT_SECRET) {
                console.error("ADMIN_JWT_SECRET is not set");
                // Fail safe to login
                url.pathname = `${adminPath}/login`;
                return NextResponse.redirect(url);
            }

            jwt.verify(token, process.env.ADMIN_JWT_SECRET);
            return NextResponse.next();
        } catch (e) {
            // Redirect to login if token is invalid
            url.pathname = `${adminPath}/login`;
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin-network-console-byn-2025/:path*"],
};
