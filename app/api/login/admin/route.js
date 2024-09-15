import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  const isAuthenticated = username === "admin" && password === "password";

  if (isAuthenticated) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.set("auth-token", true, { path: "/" });
    return response;
  } else {
    return NextResponse.json({ error: "Login failed" }, { status: 401 });
  }
}
