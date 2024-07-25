import PostGrid from "@/components/PostsGrid";
import { getAllPosts } from "@/services/PostService";
import { Box } from "@chakra-ui/react";
import React from "react";

export const metadata = {
    title: 'Explorar',
    description: 'Página de búsqueda de posts',
}

const Explore: React.FC = async () => {

    const posts = await getAllPosts()

    return (
        <Box className="flex flex-col w-2/3 justify-center">
            {posts && <PostGrid posts={posts} width="200px" height="200px" />}
        </Box>
    );
}

export default Explore;