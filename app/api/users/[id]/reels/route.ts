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
                                reels.id AS id,
                                reels.url AS url,
                                reels.title AS title,
                                reels.status AS status,
                                reels.created_at AS created_at,
                                reels.user_owner_id as user_owner_id
                            FROM reels
                            WHERE reels.user_owner_id = ${id}`

        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'User Reels not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const reels = result.rows
        return new NextResponse(JSON.stringify(reels), {
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
