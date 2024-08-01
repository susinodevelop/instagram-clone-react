'use client'
import StoryView from "@/components/StoryView";
import Story from "@/interface/Story";
import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface StoriesViewerProps {
    stories: Story[];
    previousUrl: string;
}

const StoriesViewer = ({ stories, previousUrl }: StoriesViewerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <Flex width="100vw" height="100vh" position="relative" overflow="hidden">
            <Box
                position="absolute"
                top="20px"
                right="20px"
                cursor="pointer"
                zIndex="10"
            >
                <Link href={previousUrl}>
                    <RxCross2 size="50px" color="white" />
                </Link>
            </Box>

            {currentIndex > 0 && (
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
                    zIndex="10"
                    position="absolute"
                    left="20px"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IoIosArrowDropleft size={50} color="gray" />
                </Box>
            )}

            <AnimatePresence initial={false}>
                {stories.map((story, index) => {
                    if (index >= currentIndex - 1 && index <= currentIndex + 1) {
                        const offset = (index - currentIndex) * 500; // Espacio entre historias
                        const scale = index === currentIndex ? 1 : 0.8;
                        const opacity = index === currentIndex ? 1 : 0.5;

                        return (
                            <motion.div
                                key={story.id}
                                initial={{ scale: 0.8, x: offset, opacity: 0 }}
                                animate={{ scale, x: offset, opacity }}
                                exit={{ scale: 0.8, x: offset, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <StoryView story={story} />
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </AnimatePresence>

            {currentIndex < stories.length - 1 && (
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
                    zIndex="10"
                    position="absolute"
                    right="20px"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IoIosArrowDropright size={50} color="gray" />
                </Box>
            )}
        </Flex>
    );
};

export default StoriesViewer;
