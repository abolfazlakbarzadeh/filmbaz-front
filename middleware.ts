import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "./misc/middlewares";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest & { auth?: any }) {
  try {
    // const token = await AuthMiddleware(request);
    // console.log({
    //   token,
    // });
    // request.auth = { token };
    return NextResponse.next();
  } catch (error) {
    console.log({
      error,
    });

    request.nextUrl.searchParams.set("from", request.nextUrl.pathname);
    request.nextUrl.pathname = "/login";

    return NextResponse.redirect(request.nextUrl);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: "/user/:path*",
  matcher: "/film/:path*",
};
