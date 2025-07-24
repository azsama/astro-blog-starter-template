// 大盘行情
import type {APIRoute} from 'astro';
export const prerender = false;
export const GET: APIRoute = async ({request}) => {
  const API_URL =
      'https://ms1.wangxiansen.top/api/screener/quote';
  const resp = await fetch(API_URL, {cache: 'no-store'});
  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
