import { PostWithCommentsAndUsers } from '@/types/PostWithCommentsAndUsers';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import { Image } from '@chakra-ui/react';
import { timeAgo } from '@/utils/DateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import "@/styles/globals.css";

interface AllCommentsViewProps {
    actualUser: User,
    post: PostWithCommentsAndUsers
}
const AllCommentsModal = (props: AllCommentsViewProps) => {

    const [newComment, setNewComment] = useState<string>('')

    const handleCommentInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value)
    }

    const saveNewComment = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault

        //TODO guardar comentario nuevo

    }

    return (
        <div className="flex flex-row w-full mx-auto font-sans border border-gray-900 bg-black">
            <Image className="h-[500px] w-[500px]" src={props.post.url} />
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <ProfilePicture user={props.post.owner} borderColor='red' />
                    <strong className='text-white'>{props.post.owner.username}</strong>
                </div>

                <hr className='my-5' />
                <div className="flex flex-row items-center mb-4">
                    {/* TODO revisar y sacar los datos de la bbdd1 */}
                    <ProfilePicture user={props.post.owner} borderColor='red' />
                    <p className='ml-2 text-gray-400'><strong className='text-white'>{props.post.owner.username}</strong> {props.post.description}</p>
                </div>
                <div className="mb-4 h-80 overflow-y-auto no-scrollbar">
                    {
                        props.post.comments.map(comment => {

                            return (
                                <div key={comment.id} className='flex flex-row items-center h-20'>
                                    <ProfilePicture user={comment.user} borderColor='red' />
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row'>
                                            <strong className='text-white'>{comment.user.username}</strong>
                                            <p className='ml-2 text-gray-400'>{comment.content}</p>
                                        </div>
                                        <p className='text-gray-400 text-xs mt-2'>{timeAgo(comment.created_at)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-gray-100 mb-4">
                    <p>Les gusta a <strong>username</strong> y <strong>personas más</strong></p>
                </div>
                <div className="border-t border-t-gray-400 pt-4 w-full border-b border-b-gray-800 flex flex-row">
                    <input type="text" placeholder="Añade un comentario..." onChange={handleCommentInputChange} className="w-full text-white p-2 focus:outline-none bg-black" />
                    <button onClick={saveNewComment}><span className='text-blue-500'>Publicar</span></button>
                    <button><FontAwesomeIcon icon={faFaceSmile} className="ml-1" /></button>
                </div>
            </div>
        </div>
    );
};

export default AllCommentsModal;
