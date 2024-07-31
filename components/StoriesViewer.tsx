'use client'
import StoryView from "@/components/StoryView"
import Story from "@/interface/Story"
import { Box, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

interface StoriesViewer {
    stories: Story[]
}

const StoriesViewer = ({ stories }: StoriesViewer) => {

    const [storiesToShow, setStoriesToShow] = useState<Story[]>(stories)

    return (

        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            backgroundColor="black"
            color="white"
            width="100vw"
            position="relative"
        >
            <Flex flexDirection="row" gap={4} maxW="90%">
                {/* Main Story Display */}
                {/* TODO cambiar a Image de next */}

                <StoryView story={storiesToShow[0]} />
                {/* Sidebar for Other Stories */}
                {/* <Flex
                flexDirection="column"
                gap={4}
                overflowY="auto"
                maxHeight="80vh"
                width="20%"
            >
                {stories.map((story) => (
                    <Box
                        key={story.id}
                        cursor="pointer"
                        onClick={() => setCurrentStory(story)}
                    >
                        <Image
                            src={story.imgUrl}
                            alt={story.username}
                            borderRadius="lg"
                            objectFit="cover"
                            w="full"
                        />
                        <Text>{story.username}</Text>
                        <Text fontSize="xs">{story.time}</Text>
                    </Box>
                ))}
            </Flex> */}
            </Flex>
            <Box
                position="absolute"
                top="20px"
                right="20px"
                cursor="pointer"
            >
                <Link href="/profile" >
                    <RxCross2 size="50px" color="white" />
                </Link>
            </Box>
        </Flex>
    )
}

export default StoriesViewer;