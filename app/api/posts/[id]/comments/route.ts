import { NextResponse } from 'next/server';
import { openDB } from "@/lib/db";
import NewComment from '@/interface/NewComment';

interface GetParams {
    id: string
}

interface GetHandlerArgs {
    params: GetParams
}
export async function GET(request: Request, { params }: GetHandlerArgs) {


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

interface PostHandlerArgs {
    params: {
        id: string
    }
}

export async function POST(request: Request, { params }: PostHandlerArgs) {
    try {
        const db = await openDB();
        const { id } = params;
        const comment: NewComment = await request.json();

        // Validaciones básicas
        if (!id || !comment || !comment.content || !comment.user_owner_id) {
            console.log("request " + JSON.stringify(comment))
            console.log("path params " + JSON.stringify(params))
            return new NextResponse(JSON.stringify({ error: 'Post ID, Comment Content, and User Owner ID are required' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Insertar el comentario en la tabla de comentarios
        const insertCommentQuery = `
            INSERT INTO comments 
            (
             content,
             created_at,
             user_owner_id
            )
            VALUES (?, datetime('now'), ?)
        `;

        const result = await db.run(insertCommentQuery, comment.content, comment.user_owner_id);

        // Obtener el ID del comentario recién insertado
        const newCommentId = result.lastID;

        // Relacionar el comentario con el post en la tabla intermedia
        const insertPostCommentQuery = `
            INSERT INTO post_comments (post_id, comment_id)
            VALUES (?, ?)
        `;
        await db.run(insertPostCommentQuery, id, newCommentId);

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