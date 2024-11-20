import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { ROUTES } from './constants/routes';

const intlMiddleware = createMiddleware(routing);


export default function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const segments = pathname.split('/');
  const firstSegment = segments[1];

  const validLocales = routing.locales;

  // If the first segment is not a valid locale, rewrite to the default locale
  if (firstSegment && !validLocales.includes(firstSegment as any)) {
    const url = request.nextUrl.clone();

    // For paths like '/about' and '/playground', redirect to default locale
    if (Object.values(ROUTES).includes(pathname)) {
      url.pathname = `/${routing.defaultLocale}${pathname}`;
    } else {
      // Otherwise redirect to a not-found page or any fallback
      url.pathname = `/${routing.defaultLocale}/not-found`;
    }

    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request); // Continue with the next-intl middleware
}

export const config = {
  matcher: [
    '/',
    '/(en|id)/:path*', // Match /en and /id locales
    '/((?!api|_next|_vercel|.*\\..*).*)', // Exclude API, static files, etc.
  ],
};