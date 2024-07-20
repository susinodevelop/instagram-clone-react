import { PostWithCommentsAndUsers } from '@/types/PostWithCommentsAndUsers';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import "@/styles/globals.css";
import { Image } from '@chakra-ui/react';

interface AllCommentsViewProps {
    post: PostWithCommentsAndUsers
}
const AllCommentsView = (props: AllCommentsViewProps) => {

    return (
        <div className="flex flex-row w-full mx-auto font-sans border border-gray-900 bg-black">
            <Image className="h-[500px] w-[500px]" src={props.post.url} />
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <ProfilePicture user={props.post.owner} borderColor='red' textColor='white' />
                </div>

                <hr className='my-5' />
                <div className="flex flex-row items-center mb-4">
                    {/* TODO revisar y sacar los datos de la bbdd1 */}
                    <ProfilePicture user={props.post.owner} borderColor='red' textColor='white' />
                    <p className='ml-2 text-gray-400'>Descripcion de la publicacion</p>
                </div>
                <div className="mb-4 h-80 overflow-y-auto no-scrollbar">
                    {
                        props.post.comments.map(comment => {

                            return (
                                <div key={comment.id} className='flex flex-row items-center h-20'>
                                    <ProfilePicture user={comment.user} borderColor='red' textColor='white' />
                                    <p className='ml-2 text-gray-400'>{comment.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-gray-100 mb-4">
                    <p>Les gusta a <strong>username</strong> y <strong>personas más</strong></p>
                </div>
                <div className="border-t border-gray-400 pt-4">
                    <input type="text" placeholder="Añade un comentario..." className="w-full border-none p-2 focus:outline-none bg-black" />
                </div>
            </div>
        </div>
    );
};

export default AllCommentsView;
