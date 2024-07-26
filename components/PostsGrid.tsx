'use client'
import Post from "@/interface/Post";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

interface PostGridProps {
    posts: Post[],
    width: string,
    height: string
}

const PostGrid = (props: PostGridProps) => {

    const [posts, setPosts] = useState<Post[]>(props.posts)

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '5px' }}>
            {posts && posts.map((post) => (
                <Image
                    key={post.id}
                    src={post.url}
                    alt={`post-${post.id}`}
                    width={props.width}
                    height={props.height}
                    objectFit="cover"
                />
            ))}
        </div>
    )
}

export default PostGrid;