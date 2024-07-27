import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  try {

    const result = await sql`SELECT * FROM posts`

    const posts = result.rowCount === 0 ? [] : result.rows
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}