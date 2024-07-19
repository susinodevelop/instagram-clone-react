import { NextResponse } from 'next/server';
import { openDB } from "@/lib/db";

interface GetParams {
    id: string
}

interface HandlerArgs {
    params: GetParams
}
export async function GET(request: Request, { params }: HandlerArgs) {


    try {
        const db = await openDB();
        // Extracting the 'id' parameter from the URL query
        const id = params.id

        if (!id) {
            // Return a 400 Bad Request if 'id' is not provided
            return new NextResponse(JSON.stringify({ error: 'ID is required' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const query = `
            SELECT 
              users.id as id,
              users.username as username,
              users.biography_name as biography_name,
              users.biography_content as biography_content,
              users.biography_url as biography_url,
              users.profile_img as profile_img,
              users.created_at as created_at
            FROM users
            WHERE users.id = ?
        `;

        const reel = await db.get(query, id);

        if (!reel) {
            // Return a 404 Not Found if no reel is found for the given 'id'
            return new NextResponse(JSON.stringify({ error: 'Reel not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Return the found reel with a 200 OK status
        return new NextResponse(JSON.stringify(reel), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
        // Return a 500 Internal Server Error if there was a problem executing the query
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
