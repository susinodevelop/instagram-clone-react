'use client'

import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import { Image, useToast } from '@chakra-ui/react';
import { timeAgo } from '@/utils/DateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import "@/styles/globals.css";
import { getUser } from '@/services/UserService';
import { addNewPostComment, getPostComments } from '@/services/PostService';
import User from '@/interface/User';
import Post from '@/interface/Post';
import Comment from '@/interface/Comment';
import NewComment from '@/interface/NewComment';

interface AllCommentsViewProps {
    post: Post
}

const AllCommentsModal: React.FC<AllCommentsViewProps> = ({ post }) => {
    const [actualUser, setActualUser] = useState<User>();
    const [owner, setOwner] = useState<User>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [users, setUsers] = useState<Map<number, User>>(new Map());
    const [newComment, setNewComment] = useState<string>('');
    const toast = useToast()
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const fetchComments = async () => {
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
    }

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const fetchedActualUser = await getUser(1);
            setActualUser(fetchedActualUser);

            const fetchedOwner = await getUser(post.user_owner_id);
            setOwner(fetchedOwner);

            fetchComments()
        };

        fetchData();
    }, [post]);

    useEffect(() => {
        scrollToBottom();
    }, [comments]);

    const handleCommentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const saveNewComment = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (newComment === '') return
        const newCommentData: NewComment = {
            content: newComment,
            user_owner_id: actualUser!.id //TODO revisar este forzado y comprobacion undefined
        }
        await addNewPostComment(post.id, newCommentData)
        await fetchComments()
        setNewComment("")
        toast({
            title: "Se ha añadido un mensaje.",
            description: "Tu mensaje se ha añadido con exito.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
        });
    };



    return (
        <div className="flex flex-row w-full mx-auto font-sans border border-gray-900 bg-black">
            <Image className="w-2/3" aspectRatio="1:1" src={post.url} alt={post.description} />
            <div className="p-4 w-1/3">
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
                <div ref={scrollContainerRef} className="mb-4 h-80 overflow-y-auto no-scrollbar">
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
                    <input name="newCommentInputText" type="text" placeholder="Añade un comentario..." value={newComment} onChange={handleCommentInputChange} className="w-full text-white p-2 focus:outline-none bg-black" />
                    <button onClick={saveNewComment}><span className='text-blue-500'>Publicar</span></button>
                    <button><FontAwesomeIcon icon={faFaceSmile} className="ml-1" /></button>
                </div>
            </div>
        </div>
    );
};

export default AllCommentsModal;
