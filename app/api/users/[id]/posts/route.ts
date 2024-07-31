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
                                posts.id AS id,
                                posts.description AS description,
                                posts.url AS url,
                                posts.status AS status,
                                posts.created_at AS created_at,
                                posts.user_owner_id AS user_owner_id
                            FROM posts
                            WHERE posts.user_owner_id = ${id}`

        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'User Posts not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const posts = result.rows
        return new NextResponse(JSON.stringify(posts), {
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
