import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'es', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const customerSlug = req.cookies.get('slug');
  if (pathname.startsWith('/welcome') && customerSlug) {
    req.nextUrl.pathname = `/welcome/${customerSlug}`;
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|ws).*)'],
};
