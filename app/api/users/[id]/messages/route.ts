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
                messages.id AS id,
                messages.user_id AS user_id,
                messages.action_user_id as action_user_id,
                messages.content AS content,
                messages.created_at AS created_at,
                messages.read AS read
            FROM messages
            WHERE user_id = ${id}`

        const messages = result.rows
        return new NextResponse(JSON.stringify(messages), {
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
