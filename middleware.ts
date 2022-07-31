// import type { NextRequest } from "next/server";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  const inLocal = "localhost:5000";
  const inProd = "multi-wedding.vercel.app";

  const parts = hostname.split(".");
  const subdomain = parts.shift();
  // const upleveldomain = parts.join(".");

  // detection when user came to default path
  if (subdomain === inLocal || subdomain === inProd) {
    url.pathname = `/${pathname}`;
  } else {
    //detection when user came with suburl
    url.pathname = `/invitation${pathname}`;
  }

  return NextResponse.rewrite(url);
}
