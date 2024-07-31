import { NextResponse } from 'next/server';
import NewComment from '@/interface/NewComment';
import { sql } from '@vercel/postgres';

interface GetParams {
    id: string
}

interface GetHandlerArgs {
    params: GetParams
}
export async function GET(request: Request, { params }: GetHandlerArgs) {

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
                comments.id as id,
                comments.content as content,
                comments.created_at as created_at,
                comments.user_owner_id as user_owner_id
            FROM comments
            INNER JOIN post_comments ON post_comments.comment_id = comments.id
            WHERE post_comments.post_id = ${id}
        `

        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'Comments not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const comments = result.rows
        return new NextResponse(JSON.stringify(comments), {
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

interface PostHandlerArgs {
    params: {
        id: string
    }
}

export async function POST(request: Request, { params }: PostHandlerArgs) {
    try {
        const { id } = params;
        const comment: NewComment = await request.json();

        if (!id || !comment || !comment.content || !comment.user_owner_id) {
            return new NextResponse(JSON.stringify({ error: 'Post ID, Comment Content, and User Owner ID are required' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Insertar el comentario en la tabla de comentarios
        let result = await sql`
            INSERT INTO comments 
            (content, created_at, user_owner_id)
            VALUES (${comment.content}, NOW(), ${comment.user_owner_id})
            RETURNING id`

        // Verificar si se obtuvo el ID correctamente
        console.log("firts result" + JSON.stringify(result)) //TODO eliminar
        if (result.rowCount == 0) {
            return new NextResponse(JSON.stringify({ error: 'Failed to insert comment' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const newCommentId = result.rows[0].id;

        // Relacionar el comentario con el post en la tabla intermedia
        result = await sql`
            INSERT INTO post_comments (post_id, comment_id)
            VALUES (${id}, ${newCommentId})`
        console.log("second result" + JSON.stringify(result)) //TODO eliminar
        if (result.rowCount === 0) {
            return new NextResponse(JSON.stringify({ error: 'Failed to insert comment' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new NextResponse(JSON.stringify({ success: true, commentId: newCommentId }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to save comment' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}