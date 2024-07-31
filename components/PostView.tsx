'use client';
import React, { useEffect, useState } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import CommentsView from "./CommentsView";
import { timeAgo } from "@/utils/DateUtils";
import User from '@/interface/User';
import Post from '@/interface/Post';
import Image from 'next/image';

interface PostViewProps {
    post: Post;
}

const PostView: React.FC<PostViewProps> = (props) => {
    const [post, setPost] = useState<Post>(props.post)
    const [owner, setOwner] = useState<User>();

    useEffect(() => {
        const fetchOwner = async () => {
            const user = await getUser(post.user_owner_id);
            setOwner(user);
        };
        fetchOwner();
    }, [post.user_owner_id]);

    //TODO revisar
    if (!(post && owner)) return <></>

    return (
        <div className="list-none">
            <Box>
                <div className="flex flex-row p-4 rounded-lg shadow-md">
                    <ProfilePicture user={owner} borderColor="red" />
                    <Text className="flex items-center text-white font-bold">{owner.username}</Text>
                    <Text className="flex items-center text-gray-500 mt-1 ml-2" fontSize="sm">{`• ${timeAgo(post.created_at)}`}</Text>
                </div>
                <div className="flex justify-center mb-[25px] border border-gray-900 bg-black max-h-[500px] max-w-[500px]">
                    <Image
                        src={post.url}
                        alt={post.description}
                        width={500}
                        height={500}
                        priority={true}
                    />
                </div>
                <div>Le gusta a .... y más</div>
                <div>
                    <CommentsView visibleComments={2} post={post} />
                </div>
            </Box>
            <hr className="border-t-1 border-white my-4" />
        </div>
    );
};

export default PostView;
