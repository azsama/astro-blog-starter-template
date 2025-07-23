import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const API_URL =
      'https://ms1.wangxiansen.top/api/realtime/quotec?symbol=SZ300757';

  const resp  = await fetch(API_URL, { cache: 'no-store' });
  const data  = await resp.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
