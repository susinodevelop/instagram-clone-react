import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    console.log("Obteniendo datos de usuarios")
    const result = await sql`SELECT * FROM users`

    console.log("Datos de usuarios obtenidos" + JSON.stringify(result))
    const users = result.rowCount === 0 ? [] : result.rows

    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log("ERROR ABURRIDO" + JSON.stringify(error))
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}