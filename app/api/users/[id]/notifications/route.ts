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
                notifications.id AS id,
                notifications.user_id as user_id,
                notifications.action_type as action_type,
                notifications.action_user_id as action_user_id,
                notifications.related_entity_id as related_entity_id,
                notifications.related_entity_type as related_entity_type,
                notifications.content AS content,
                notifications.created_at AS created_at,
                notifications.read AS read
            FROM notifications
            WHERE notifications.user_id = ${id}`

        const notifications = result.rows
        return new NextResponse(JSON.stringify(notifications), {
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
