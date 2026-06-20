// ===== Integration test for /api/route.ts using supertest =====
// The Next.js route handler exports an async GET() that returns a NextResponse.
// We wrap it in a Node http.Server so supertest can exercise it as a real HTTP
// endpoint — this verifies the handler's contract (status, headers, body) the
// way a real client would experience it.

import http from 'http'
import type { AddressInfo } from 'net'
import request from 'supertest'
import { GET } from '@/app/api/route'

/**
 * Build a Node http.Server that delegates GET requests to the Next.js route
 * handler. Non-GET requests get a 405. This is the same adapter pattern
 * Next.js itself uses internally to expose route handlers over HTTP.
 */
function createServer(): http.Server {
  return http.createServer(async (req, res) => {
    try {
      if (req.method === 'GET') {
        const response = await GET()
        const body = await response.text()
        res.statusCode = response.status
        // Forward headers from the Web Response to the Node response.
        response.headers.forEach((value, key) => {
          res.setHeader(key, value)
        })
        res.end(body)
      } else {
        res.statusCode = 405
        res.setHeader('Allow', 'GET')
        res.setHeader('Content-Type', 'text/plain')
        res.end('Method Not Allowed')
      }
    } catch (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end(`Internal Server Error: ${err instanceof Error ? err.message : String(err)}`)
    }
  })
}

describe('GET /api (Next.js route handler)', () => {
  let server: http.Server

  beforeEach((done) => {
    server = createServer()
    server.listen(0, () => done()) // 0 = pick a random free port
  })

  afterEach((done) => {
    server.close(() => done())
  })

  it('returns 200 OK', async () => {
    const res = await request(server).get('/')
    expect(res.status).toBe(200)
  })

  it('returns JSON content-type', async () => {
    const res = await request(server).get('/')
    expect(res.headers['content-type']).toMatch(/application\/json/i)
  })

  it('returns the hello world JSON body', async () => {
    const res = await request(server).get('/')
    expect(res.body).toEqual({ message: 'Hello, world!' })
  })

  it('returns the exact byte body the handler produced', async () => {
    const res = await request(server).get('/')
    expect(res.text).toBe(JSON.stringify({ message: 'Hello, world!' }))
  })

  it('accepts any path (route handler ignores the URL)', async () => {
    // The route handler returns the same response regardless of the path
    // because it doesn't read the request at all.
    const res = await request(server).get('/any/path/here')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ message: 'Hello, world!' })
  })

  it('responds quickly (well under 1 second)', async () => {
    const start = Date.now()
    await request(server).get('/')
    const elapsed = Date.now() - start
    expect(elapsed).toBeLessThan(1000)
  })
})

describe('GET /api — direct handler invocation (no HTTP layer)', () => {
  // A second test suite that calls GET() directly, bypassing the http.Server
  // wrapper. This isolates the handler logic from the HTTP adapter and serves
  // as a sanity check that the handler itself is correct.
  it('returns a 200 Response with the JSON body', async () => {
    const res = await GET()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toEqual({ message: 'Hello, world!' })
  })

  it('returns a Response object with a .json() method', async () => {
    const res = await GET()
    expect(typeof res.json).toBe('function')
    expect(typeof res.text).toBe('function')
  })

  it('sets the content-type header to application/json', async () => {
    const res = await GET()
    expect(res.headers.get('content-type')).toMatch(/application\/json/i)
  })
})

describe('GET /api — HTTP method routing', () => {
  let server: http.Server

  beforeEach((done) => {
    server = createServer()
    server.listen(0, () => done())
  })

  afterEach((done) => {
    server.close(() => done())
  })

  it('rejects POST with 405 Method Not Allowed', async () => {
    const res = await request(server).post('/')
    expect(res.status).toBe(405)
    expect(res.headers.allow).toMatch(/GET/i)
  })

  it('rejects DELETE with 405 Method Not Allowed', async () => {
    const res = await request(server).delete('/')
    expect(res.status).toBe(405)
  })

  it('rejects PUT with 405 Method Not Allowed', async () => {
    const res = await request(server).put('/')
    expect(res.status).toBe(405)
  })
})

describe('GET /api — server lifecycle', () => {
  it('binds to a random ephemeral port', (done) => {
    const server = createServer()
    server.listen(0, () => {
      const address = server.address() as AddressInfo
      expect(address.port).toBeGreaterThan(1024)
      server.close(() => done())
    })
  })

  it('can be closed cleanly', (done) => {
    const server = createServer()
    server.listen(0, () => {
      server.close(() => {
        // After close, the server's address is null.
        expect(server.address()).toBeNull()
        done()
      })
    })
  })
})
