// lib/cookie.ts
export function serializeCookie(name: string, val: string, options: { maxAge?: number; path?: string; httpOnly?: boolean; secure?: boolean; sameSite?: "lax" | "strict" | "none" } = {}) {
  const parts = [`${encodeURIComponent(name)}=${encodeURIComponent(val)}`];
  if (options.maxAge !== undefined) parts.push(`Max-Age=${Math.floor(options.maxAge)}`);
  parts.push(`Path=${options.path ?? "/"}`);
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.secure) parts.push("Secure");
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  return parts.join("; ");
}
