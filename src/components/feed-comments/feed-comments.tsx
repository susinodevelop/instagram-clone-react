import React, { useState } from 'react';
import { FeedCommentModel } from '../../models/feed-comment-model';
import FeedComment from '../feed-comment';
import './style.css';

export const FeedComments = () => {

    //TODO revisar tema comentarios (traelos desde un api back)
    const [comments, setComments] = useState<FeedCommentModel[]>(
        [
            {
                id: "1",
                comment: "Está toh rexulón",
                user: {
                    username: "suso_gz",
                    email: "email@email.com"
                }
            }
        ]
    )

    const [textComment, setTextComment] = useState<string>('')

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addComment(textComment);
            event.currentTarget.value = ''
        }
    }

    const addComment = (commentValue: string) => {
        setComments(
            [
                ...comments,
                {
                    id: `${Number(comments[comments.length - 1].id) + 1}`,
                    comment: commentValue,
                    user: {
                        username: "invitado",
                        email: "invitado@email.com"
                    }
                }
            ]
        )
    }

    return (
        <div>
            <input className='comment-input-text'
                type='text'
                placeholder='Add a comment...'
                onChange={e => setTextComment(e.target.value)}
                onKeyDown={onKeyDown}
            />
            {
                comments.map(comment => (
                    <FeedComment key={comment.id} comment={comment} />
                ))
            }
        </div>
    )
}