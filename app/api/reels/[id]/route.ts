
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface GetParams {
    id: string
}

interface HandlerArgs {
    params: GetParams
}
export async function GET(request: Request, { params }: HandlerArgs) {

    try {
        const { id } = params

        if (!id) {
            return new NextResponse(JSON.stringify({ error: 'ID is required' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const result = await sql`
            SELECT 
                reels.id as id,
                reels.title as title,
                reels.url as url,
                reels.status as status,
                reels.created_at as created_at,
                reels.user_owner_id as user_owner_id
            FROM reels
            WHERE reels.id = ${id}`

        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'Reel not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const reel = result.rows[0]
        return new NextResponse(JSON.stringify(reel), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
