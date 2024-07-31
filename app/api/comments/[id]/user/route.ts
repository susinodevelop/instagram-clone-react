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
                users.id as id,
                users.username as username,
                users.biography_name as biography_name,
                users.biography_content as biography_content,
                users.biography_url as biography_url,
                users.profile_img as profile_img,
                users.created_at as created_at
            FROM users
            INNER JOIN comments ON comments.user_owner_id = users.id
            WHERE comments.id = ${id}`

        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'Comment not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const user = result.rows[0]
        return new NextResponse(JSON.stringify(user), {
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
