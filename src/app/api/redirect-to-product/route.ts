export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const productType = searchParams.get('type') || 'gluten-detect';
  
  // Map product types to their respective URLs
  const productUrls = {
    'gluten-detect': 'https://dietadvance.pt/loja/saude-gastro-intestinal/gluten-detect/',
    'default': 'https://dietadvance.pt/loja/saude-gastro-intestinal/gluten-detect/'
  };
  
  const targetUrl = productUrls[productType as keyof typeof productUrls] || productUrls.default;
  
  // Create a redirect response
  return NextResponse.redirect(targetUrl, {
    status: 302,
    headers: {
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    }
  });
}