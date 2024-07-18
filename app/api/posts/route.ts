import { openDB } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const db = await openDB();

    const users = await db.all('SELECT * FROM posts');
    return new Response(JSON.stringify(users), {
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