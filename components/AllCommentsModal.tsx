'use client'

import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import { Image } from '@chakra-ui/react';
import { timeAgo } from '@/utils/DateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import "@/styles/globals.css";
import { getUser } from '@/services/UserService';
import { getPostComments } from '@/services/PostService';
import User from '@/interface/User';
import Post from '@/interface/Post';
import Comment from '@/interface/Comment';

interface AllCommentsViewProps {
    post: Post
}

const AllCommentsModal: React.FC<AllCommentsViewProps> = ({ post }) => {
    const [actualUser, setActualUser] = useState<User | null>(null);
    const [owner, setOwner] = useState<User | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [users, setUsers] = useState<Map<number, User>>(new Map());
    const [newComment, setNewComment] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedActualUser = await getUser(1);
            setActualUser(fetchedActualUser);

            const fetchedOwner = await getUser(post.user_owner_id);
            setOwner(fetchedOwner);

            const fetchedComments = await getPostComments(post.id);
            setComments(fetchedComments);

            const userMap = new Map<number, User>();
            for (const comment of fetchedComments) {
                if (!userMap.has(comment.user_owner_id)) {
                    const user = await getUser(comment.user_owner_id);
                    userMap.set(user.id, user);
                }
            }
            setUsers(userMap);
        };

        fetchData();
    }, [post]);

    const handleCommentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const saveNewComment = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //TODO guardar comentario nuevo
    };

    return (
        <div className="flex flex-row w-full mx-auto font-sans border border-gray-900 bg-black">
            <Image className="h-[500px] w-[500px]" src={post.url} />
            <div className="p-4">
                {owner && (
                    <>
                        <div className="flex items-center mb-2">
                            <ProfilePicture user={owner} borderColor='red' />
                            <strong className='text-white'>{owner.username}</strong>
                        </div>
                        <hr className='my-5' />
                        <div className="flex flex-row items-center mb-4">
                            <ProfilePicture user={owner} borderColor='red' />
                            <p className='ml-2 text-gray-400'><strong className='text-white'>{owner.username}</strong> {post.description}</p>
                        </div>
                    </>
                )}
                <div className="mb-4 h-80 overflow-y-auto no-scrollbar">
                    {comments.map(comment => {
                        const user = users.get(comment.user_owner_id);
                        return (
                            <div key={comment.id} className='flex flex-row items-center h-20'>
                                {user && (
                                    <>
                                        <ProfilePicture user={user} borderColor='red' />
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row'>
                                                <strong className='text-white'>{user.username}</strong>
                                                <p className='ml-2 text-gray-400'>{comment.content}</p>
                                            </div>
                                            <p className='text-gray-400 text-xs mt-2'>{timeAgo(comment.created_at)}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="text-gray-100 mb-4">
                    <p>Les gusta a <strong>username</strong> y <strong>personas más</strong></p>
                </div>
                <div className="border-t border-t-gray-400 pt-4 w-full border-b border-b-gray-800 flex flex-row">
                    <input name="newCommentInputText" type="text" placeholder="Añade un comentario..." onChange={handleCommentInputChange} className="w-full text-white p-2 focus:outline-none bg-black" />
                    <button onClick={saveNewComment}><span className='text-blue-500'>Publicar</span></button>
                    <button><FontAwesomeIcon icon={faFaceSmile} className="ml-1" /></button>
                </div>
            </div>
        </div>
    );
};

export default AllCommentsModal;
