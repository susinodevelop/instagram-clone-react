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
                comments.id as id,
                comments.content as content,
                comments.created_at as created_at,
                comments.user_owner_id as user_owner_id
            FROM comments
            INNER JOIN post_comments ON post_comments.comment_id = comments.id
            WHERE post_comments.post_id = ?
        `;

        const comments = await db.all(query, id);

        if (!comments) {
            // Return a 404 Not Found if no reel is found for the given 'id'
            return new NextResponse(JSON.stringify({ error: 'User not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Return the found reel with a 200 OK status
        return new NextResponse(JSON.stringify(comments), {
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
