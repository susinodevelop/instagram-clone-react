import Header from '@/components/Header'
import FeedView from '@/components/FeedView'
import { Flex } from '@chakra-ui/react'
import Suggestions from "@/components/Suggestions";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Inicio',
    description: 'Página del feed de posts',
}

const Feed = () => {
    return (
        <Flex>
            <Flex direction="column" flex="1">
                <Header />
                <FeedView />
            </Flex>
            <Suggestions />
        </Flex>
    );
}

export default Feed;
