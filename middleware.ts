import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSubscriptionTier } from "@/lib/subscription";
import { isAuthenticated } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const cookies = request.cookies.toString();
  const tier = getSubscriptionTier(cookies);
  const authenticated = isAuthenticated(cookies);

  // حماية لوحة التحكم: إعادة التوجيه لتسجيل الدخول إذا لم يكن المستخدم مسجلاً
  if (url.pathname.startsWith("/dashboard")) {
    if (!authenticated) {
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", request.nextUrl.pathname + request.nextUrl.search);
      return NextResponse.redirect(url);
    }
  }

  // لا نسمح بالوصول لصفحة تسجيل الدخول/الحساب إذا كان المستخدم مسجلاً
  if ((url.pathname === "/login" || url.pathname === "/signup") && authenticated) {
    url.pathname = "/dashboard";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set("x-subscription-tier", tier);
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/api/data/:path*"],
};
