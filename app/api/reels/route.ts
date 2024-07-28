import Reel from "@/interface/Reel";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  try {

    const result = await sql`SELECT * FROM reels`

    const reels: Reel[] = result.rowCount === 0 ? [] : result.rows as Reel[]
    return new Response(JSON.stringify(reels), {
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
