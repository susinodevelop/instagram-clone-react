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
                notifications.id AS id,
                notifications.user_id as user_id,
                notifications.action_type as action_type,
                notifications.action_user_id as action_user_id,
                notifications.related_entity_id as related_entity_id,
                notifications.related_entity_type as related_entity_type,
                notifications.content AS content,
                notifications.created_at AS created_at
            FROM notifications
            WHERE notifications.user_id = ?
        `;

        const posts = await db.all(query, id);

        if (!posts) {
            // Return a 404 Not Found if no reel is found for the given 'id'
            return new NextResponse(JSON.stringify({ error: 'User Notifications not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Return the found reel with a 200 OK status
        return new NextResponse(JSON.stringify(posts), {
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
