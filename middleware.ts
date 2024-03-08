import { NextResponse } from 'next/server';


export default function middleware(request: Request) {
  console.log('logging from middleware');
  console.warn('warning from middleware');
  console.error('erroring from middleware');

  // Rewrite to URL
  return NextResponse.rewrite(request.url);
}