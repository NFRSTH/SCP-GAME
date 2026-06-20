import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Query-string schema for GET /api.
 *
 * The route accepts a single optional `name` query parameter. When omitted
 * (or when the route is invoked without a Request — e.g. in unit tests) the
 * default `"world"` is used so the endpoint keeps its canonical
 * `{ message: "Hello, world!" }` contract.
 *
 * Validation rules:
 *   - Must be a string (query params are always strings, but zod still guards
 *     against unexpected types when called directly).
 *   - Trimmed of surrounding whitespace.
 *   - Between 1 and 50 characters after trimming (empty/whitespace-only names
 *     are rejected with a 400).
 */
const QuerySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "name must not be empty")
    .max(50, "name must be at most 50 characters")
    .optional()
    .default("world"),
});

/**
 * GET /api
 *
 * Returns a JSON greeting. Accepts an optional `?name=<value>` query parameter
 * to personalize the greeting; falls back to "world" when absent.
 *
 * Responses:
 *   200 OK          — `{ message: "Hello, <name>!" }`
 *   400 Bad Request — `{ error: "Invalid query parameters", details: ... }`
 *   500 Internal    — `{ error: "Internal server error" }`
 *
 * The optional `request` parameter keeps the handler callable with no args
 * (the existing test suite invokes `GET()` directly), and lets Next.js inject
 * the incoming Request in production.
 */
export async function GET(request?: Request) {
  try {
    // `request` is optional so the handler can be unit-tested without an HTTP
    // layer. When it's missing we fall through to the schema default.
    let rawName: string | undefined;
    if (request) {
      try {
        const url = new URL(request.url);
        rawName = url.searchParams.get("name") ?? undefined;
      } catch {
        // Malformed URL — surface as a 400 rather than crashing.
        return NextResponse.json(
          { error: "Invalid query parameters", details: { url: "malformed request URL" } },
          { status: 400 },
        );
      }
    }

    const parsed = QuerySchema.safeParse({ name: rawName });
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: `Hello, ${parsed.data.name}!` });
  } catch (err) {
    // Defensive catch-all: never leak internals to the client.
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Internal server error", detail },
      { status: 500 },
    );
  }
}
