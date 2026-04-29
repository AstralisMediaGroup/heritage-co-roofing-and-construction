// Static-assets-only worker. The `assets` binding in wrangler.jsonc serves
// all 26 pre-built pages from dist/. This file exists only because
// @cloudflare/vite-plugin (auto-loaded by Astro 6 in the CF Workers Builds
// environment) validates that `main` resolves to a real file. The handler
// is a 404 fallback that should never run in production.
export default {
	async fetch() {
		return new Response('Not Found', { status: 404 });
	},
};
