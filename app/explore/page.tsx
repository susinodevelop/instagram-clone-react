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

    const posts: Post[] = await getAllPosts()
    const reels: Reel[] = await getAllReels()

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
                {allPublications.map((publication, index) => (
                    <Box
                        key={index}
                        gridColumn={index % 7 === 0 ? 'span 2' : 'span 1'}
                        gridRow={index % 7 === 0 ? 'span 2' : 'span 1'}
                        overflow="hidden"
                        borderRadius="md"
                        position="relative"
                    >
                        {publication.type === 'reel' ? (
                            <ReelView reel={publication as Reel} />
                        ) : (
                            <Image
                                src={publication.url}
                                alt={publication.description}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                            />
                        )}
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default Explore;