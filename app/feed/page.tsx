import Header from '@/components/Header'
import { Box, Flex, VStack } from '@chakra-ui/react'
import Suggestions from "@/components/Suggestions";
import { Metadata } from 'next';
import { getAllPosts } from '@/services/PostService';
import PostView from '@/components/PostView';

export const metadata: Metadata = {
    title: 'Inicio',
    description: 'Página del feed de posts',
}

const Feed = async () => {

    const posts = await getAllPosts()

    return (
        <Box
            position="absolute"
            left="0"
            top="0"
            width="100%"
            display="flex"
            flexDirection="column"
            gap="20px"
            alignItems="center"
            justifyContent="center"
        >
            <Header />
            <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1" maxWidth={500}>
                {
                    posts.map(post => (
                        <PostView key={post.id} post={post} />
                    ))
                }
            </VStack>
        </Box>
    );
}

export default Feed;
