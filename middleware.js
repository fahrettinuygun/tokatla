import {next} from '@vercel/edge';

export default function middleware(req) {
  // Do something with the request
  return next({
    headers: {
        'Referer-Policy': 'Origin-When-Cross-Origin',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-DNS-Prefetch-Control': 'on',
        'Strict-Transport-Security': 'max-age=31536000; IncludeSubDomains; preload'
    }
  });
}