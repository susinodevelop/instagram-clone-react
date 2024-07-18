import { NextRequest, NextResponse } from 'next/server';
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
                reels.id as reel_id,
                reels.title as reel_title,
                reels.url as reel_url,
                reels.status as reel_status,
                users.username as username,
                users.profile_img as user_profile_img
            FROM reels
            INNER JOIN user_reels ON reels.id = user_reels.reel_id
            INNER JOIN users ON user_reels.user_id = users.id
            WHERE reels.id = ?
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
