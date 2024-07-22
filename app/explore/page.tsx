import PostGrid from "@/components/PostsGrid";
import { getAllPosts } from "@/services/PostService";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const metadata = {
    title: 'Explorar',
    description: 'Página de búsqueda de posts',
}

const Explore: React.FC = async () => {

    const posts = await getAllPosts()

    return (
        <Box className="flex flex-col w-2/3 justify-center">
            <PostGrid posts={posts} width="200px" height="200px" />
        </Box>
    );
}

export default Explore;