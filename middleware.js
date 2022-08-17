// import type { NextRequest } from "next/server";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

export default function middleware(req = NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  const inLocal = "localhost:5000";
  const inProd = "multi-wedding.vercel.app";

  const parts = hostname.split(".");
  const subdomain = parts.shift();

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.${inProd}`, "")
      : hostname.replace(`.${inLocal}`, "");

  console.log("Middleware jojo: ", { hostname, subdomain });
  // const upleveldomain = parts.join(".");

  // detection when user came to default path
  if (subdomain === inLocal || subdomain === inProd || pathname === inProd) {
    url.pathname = `/${pathname}`;
  } else {
    //detection when user came with suburl
    url.pathname = `/invitation${pathname}`;
  }

  return NextResponse.rewrite(url);
}
