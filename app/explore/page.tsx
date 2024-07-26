'use client'
import PostGrid from "@/components/PostsGrid";
import Post from "@/interface/Post";
import { getAllPosts } from "@/services/PostService";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Explore: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([])

    const fetchData = async () => {
        setPosts(await getAllPosts())
    }

    useEffect(() => {
        document.title = 'Explorar'
        fetchData()
    }, [])

    return (
        <Box className="flex flex-col w-2/3 justify-center">
            {posts && <PostGrid posts={posts} width="200px" height="200px" />}
        </Box>
    );
}

export default Explore;