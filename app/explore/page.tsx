import PostGrid from "@/components/PostsGrid";
import ReelView from "@/components/ReelView";
import Post from "@/interface/Post";
import Reel from "@/interface/Reel";
import { getAllPosts } from "@/services/PostService";
import { getAllReels } from "@/services/ReelService";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export const metadata = {
    title: 'Explorar',
    description: 'Página de búsqueda de posts',
}

const Explore: React.FC = async () => {

    const posts = (await getAllPosts() as Post[]).map(post => ({ ...post, type: 'post' }))
    const reels = (await getAllReels() as Reel[]).map(reel => ({ ...reel, type: 'reel' }))

    const allPublications = [...posts, ...reels].sort(() => Math.random() - 0.5);

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
        >
            <SimpleGrid
                columns={{ base: 2, md: 3 }}
                spacing={4}
                autoRows="minmax(100px, auto)"
                className="w-2/4"
            >
                {allPublications.map((publication, index) => {
                    let resultHtml;
                    if (publication.type === "post") {
                        const post = publication as Post
                        resultHtml = <Image
                            src={post.url}
                            alt={post.description}
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            transition="transform 0.3s"
                            _hover={{ transform: 'scale(1.05)' }}
                        />
                    } else if (publication.type === "reel") {
                        resultHtml = <ReelView reel={publication as Reel} width="150px" />
                    }

                    return (
                        <Box
                            key={index}
                            gridColumn={index % 7 === 0 ? 'span 2' : 'span 1'}
                            gridRow={index % 7 === 0 ? 'span 2' : 'span 1'}
                            overflow="hidden"
                            borderRadius="md"
                            position="relative"
                        >
                            {resultHtml}
                        </Box>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}

export default Explore;