// 大单数据
import type {APIRoute} from 'astro';

export const prerender = false;
export const GET: APIRoute = async ({request}) => {
  // 把原始请求 URL 解析成 URL 对象
  const {searchParams} = new URL(request.url);
  const symbol = searchParams.get('symbol')
  const need = searchParams.get('need') ?? '50'
  const API_URL =
      'https://ms1.wangxiansen.top/api/realtime/bigOrder?symbol=' + symbol + '&need=' + need;
  const resp = await fetch(API_URL, {cache: 'no-store'});
  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
