/**
 * Whether the page itself is being served from a local origin.
 *
 * Anything that reaches out to localhost / a private address must be gated on
 * this. A public origin (aegraph.dev) making such a request triggers Chrome's
 * "wants to find and connect to devices on your local network" permission
 * prompt, which is alarming and useless to visitors.
 */
export function isLocalOrigin(): boolean {
  if (typeof window === "undefined") return false;
  const { hostname } = window.location;
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname === "::1"
  );
}

/**
 * Utility function to replace Aegraph Vercel URLs with localhost when running locally
 * @param html HTML content that may contain aegraph.dev links
 * @returns Updated HTML with appropriate URLs
 */
export function replaceAegraphUrlsWithLocalhost(html: string): string {
  if (!isLocalOrigin()) {
    // No need to replace if we're not running locally
    return html;
  }

  // Replace all occurrences of aegraph.dev / aegraph.vercel.app with localhost:3000
  return html.replace(
    /(href|src)=["'](https?:\/\/aegraph\.(?:dev|vercel\.app))([^"']*)["']/gi,
    '$1="http://localhost:3000$3"'
  );
}

/**
 * Returns the appropriate base URL for Aegraph based on the current environment
 * @returns Base URL for Aegraph (either localhost:3000 or aegraph.dev)
 */
export function getAegraphBaseUrl(): string {
  return isLocalOrigin() ? "http://localhost:3000" : "https://aegraph.dev";
}

/**
 * Fixes relative Wikipedia links in HTML content to make them work in iframes/embeds
 * @param html HTML content from Wikipedia API
 * @param language Wikipedia language code (e.g., 'en')
 * @returns HTML with fixed Wikipedia links
 */
export function fixWikipediaLinks(
  html: string,
  language: string = "en"
): string {
  const baseUrl = `https://${language}.wikipedia.org`;

  // Fix relative URLs in href and src attributes
  return (
    html
      // Fix links to Wikipedia articles (convert /wiki/Article to full URL)
      .replace(/href=["']\/wiki\/([^"']*)["']/gi, `href="${baseUrl}/wiki/$1"`)

      // Fix links to special pages
      .replace(/href=["']\/(w\/[^"']*)["']/gi, `href="${baseUrl}/$1"`)

      // Fix image sources
      .replace(
        /src=["']\/\/(upload\.wikimedia\.org[^"']*)["']/gi,
        `src="https://$1"`
      )

      // Fix other relative sources
      .replace(/src=["']\/([^"']*)["']/gi, `src="${baseUrl}/$1"`)

      // Add target="_blank" to all external links to open in new tab
      .replace(/<a([^>]*href=["'][^"']*["'][^>]*)>/gi, '<a$1 target="_blank">')
  );
}
