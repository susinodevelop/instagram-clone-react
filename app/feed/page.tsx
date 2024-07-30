import Header from '@/components/Header'
import { Flex, VStack } from '@chakra-ui/react'
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
        <Flex>
            <Flex direction="column" flex="1">
                <Header />
                <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">
                    {
                        posts.map(post => (
                            <PostView key={post.id} post={post} />
                        ))
                    }
                </VStack>
            </Flex>
            <Suggestions />
        </Flex>
    );
}

export default Feed;
