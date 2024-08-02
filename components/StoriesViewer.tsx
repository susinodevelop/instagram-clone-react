'use client'
import StoryView from "@/components/StoryView";
import Story from "@/interface/Story";
import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

//TODO dejarlo en una pagina o meterlo en un modal?
interface StoriesViewerProps {
    stories: Story[];
    previousUrl: string;
}

const StoriesViewer = ({ stories, previousUrl }: StoriesViewerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setOffset(window.innerWidth * 0.3); // Ajuste dinámico
        };

        // Inicializar con el tamaño actual de la ventana
        handleResize();

        // Agregar un event listener para actualizar el offset cuando cambie el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonte
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    left="31%"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IoIosArrowDropleft size={50} color="gray" />
                </Box>
            )}

            <AnimatePresence initial={false}>
                {stories.map((story, index) => {
                    if (index >= currentIndex - 1 && index <= currentIndex + 1) {
                        const dynamicOffset = (index - currentIndex) * offset; // Espacio entre historias
                        const scale = index === currentIndex ? 1 : 0.8;
                        const opacity = index === currentIndex ? 1 : 0.5;

                        const isActualStory = index == currentIndex

                        return (
                            <motion.div
                                key={story.id}
                                initial={{ scale: 0.8, x: dynamicOffset, opacity: 0 }}
                                animate={{ scale, x: dynamicOffset, opacity }}
                                exit={{ scale: 0.8, x: dynamicOffset, opacity: 0 }}
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
                                <StoryView story={story} showComments={isActualStory} showLike={isActualStory} />
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
                    right="31%"
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
