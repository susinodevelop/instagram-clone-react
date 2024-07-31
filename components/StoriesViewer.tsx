'use client'
import StoryView from "@/components/StoryView";
import Story from "@/interface/Story";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface StoriesViewerProps {
    stories: Story[];
}

const StoriesViewer = ({ stories }: StoriesViewerProps) => {

    const [currentStories, setCurrentStories] = useState<Story[]>(stories)
    const [currentStory, setCurrentStory] = useState<Story>(stories[0])
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
        setCurrentStory(currentStories[currentIndex])
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? stories.length - 1 : prevIndex - 1);
        setCurrentStory(currentStories[currentIndex])
    };

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
            <Box
                position="absolute"
                top="20px"
                right="20px"
                cursor="pointer"
            >
                <Link href="/profile">
                    <RxCross2 size="50px" color="white" />
                </Link>
            </Box>

            <Box
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                backgroundColor="transparent"
                margin={25}
                _hover={{ backgroundColor: "white" }}
                onClick={handlePrev}
            >
                <IoIosArrowDropleft size={25} color="gray" />
            </Box>

            <Flex flexDirection="row" gap={4} maxW="90%">
                <StoryView story={currentStory} />
            </Flex>

            <Box
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                backgroundColor="transparent"
                margin={25}
                _hover={{ backgroundColor: "white" }}
                onClick={handleNext}
            >
                <IoIosArrowDropright
                    size={25}
                    color="gray"
                />
            </Box>
        </Flex>
    );
};

export default StoriesViewer;
