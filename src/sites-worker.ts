interface SiteEnvironment { ASSETS: { fetch(request: Request): Promise<Response> } }
export default {
  async fetch(request: Request, env: SiteEnvironment): Promise<Response> {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404 || !['GET', 'HEAD'].includes(request.method) || !request.headers.get('accept')?.includes('text/html')) return response
    const indexUrl = new URL('/', request.url)
    const page = await env.ASSETS.fetch(new Request(indexUrl, request))
    if (!page.ok) return response
    return new Response(page.body, { status: 404, headers: page.headers })
  },
}
