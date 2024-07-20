import { openDB } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const db = await openDB();

    const comments = await db.all('SELECT * FROM comments')
    return new Response(JSON.stringify(comments), {
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