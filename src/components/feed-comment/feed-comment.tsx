import React from "react";
import { FeedCommentModel } from "../../models/feed-comment-model";
import './style.css';

export interface FeedCommentProps {
    comment: FeedCommentModel
}

export const FeedComment = ({ comment }: FeedCommentProps) => {
    return (
        <div className='feed-comment'>
            <a href='/' className='feed-comment-user'>{comment.user.username}</a>
            <span className='feed-comment-value'>{comment.comment}</span>
        </div>
    )
}