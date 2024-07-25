'use client'; // Indica que es un componente del cliente

import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import CommentsView from "./CommentsView";
import { timeAgo } from "@/utils/DateUtils";
import { User } from '@/interface/User';

interface PostViewProps {
    post: Post;
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
    const [owner, setOwner] = useState<User | null>(null);

    useEffect(() => {
        const fetchOwner = async () => {
            const user = await getUser(post.user_owner_id);
            setOwner(user);
        };
        fetchOwner();
    }, [post.user_owner_id]);

    if (!owner) return null;

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
                        alt="Image post"
                        objectFit="cover"
                        maxWidth="500px"
                        maxHeight="500px"
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
