'use client';
import React, { useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "@/interface/User";
import { getPostComments } from "@/services/PostService";
import { getUser } from "@/services/UserService";
import Post from "@/interface/Post";
import Comment from "@/interface/Comment";
import PostModal from "./PostModal";

interface CommentsViewProps {
    visibleComments: number;
    post: Post;
}

const CommentsView: React.FC<CommentsViewProps> = ({ visibleComments, post }) => {
    const [owner, setOwner] = useState<User>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            const user = await getUser(post.user_owner_id);
            const commentsData: Comment[] = await getPostComments(post.id);
            setOwner(user);
            setComments(commentsData);
        };
        loadData();
    }, [post.user_owner_id, post.id]);

    const openPostModal = () => setPostModalOpen(true)
    const closePostModal = () => setPostModalOpen(false)

    return (
        <>
            <div>
                {
                    owner &&
                    <div>
                        <p className='text-gray-400 w-[500px]'><strong className='text-white'>{owner.username}</strong> {post.description}</p>
                        <ul>
                            {comments && Array.isArray(comments) && comments.slice(-visibleComments).map((comment) => (
                                <li key={comment.id} className="my-2">
                                    <span className="font-bold">{owner.username}  </span>
                                    {comment.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                {
                    visibleComments < comments.length &&
                    <button className="text-gray-500 text-sm my-2" onClick={openPostModal}>
                        Ver los {comments.length} comentarios
                        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                    </button>
                }
            </div>
            <PostModal post={post} isOpen={isPostModalOpen} onClose={closePostModal} />
        </>
    );
};

export default CommentsView;
