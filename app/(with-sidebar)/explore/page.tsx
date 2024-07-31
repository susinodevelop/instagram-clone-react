import ReelView from "@/components/ReelView";
import Post from "@/interface/Post";
import Reel from "@/interface/Reel";
import { getAllPosts } from "@/services/PostService";
import { getAllReels } from "@/services/ReelService";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: 'Explorar',
    description: 'Página de búsqueda de posts',
}

const Explore: React.FC = async () => {

    const posts = (await getAllPosts() as Post[]).map(post => ({ ...post, type: 'post' }));
    const reels = (await getAllReels() as Reel[]).map(reel => ({ ...reel, type: 'reel' }));

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
                spacing={1}
                className="w-3/4"
            >
                {allPublications.map((publication, index) => {
                    let resultHtml;

                    if (publication.type === "post") {
                        const post = publication as Post;
                        resultHtml = (
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={post.url}
                                    alt={post.description}
                                    fill
                                    className="aspect-square transition-transform duration-300 hover:scale-105"
                                    priority
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        );
                    } else if (publication.type === "reel") {
                        const reel = publication as Reel;
                        resultHtml = (
                            <div className="w-full h-full">
                                <ReelView
                                    reel={reel}
                                    width="100%"
                                    height="100%"
                                    className="aspect-9/16 transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        );
                    }

                    return (
                        <Box
                            key={index}
                            gridColumn="span 1"
                            gridRow={publication.type === "reel" ? 'span 2' : 'span 1'}
                            overflow="hidden"
                            position="relative"
                        >
                            {resultHtml}
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

export default Explore;
