'use client'
import Story from "@/interface/Story";
import User from "@/interface/User";
import { getUser } from "@/services/UserService";
import { timeAgo } from "@/utils/DateUtils";
import { Box, Input, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";

interface StoryViewProps {
    story: Story;
}

const StoryView = ({ story }: StoryViewProps) => {
    const [storyOwner, setStoryOwner] = useState<User | undefined>();
    const [answer, setAnswer] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(true);

    const handleOnChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const handleLikeStory = () => alert("Me ha gustado la foto"); //TODO: Implementar funcionalidad de like

    const handleSendComment = () => alert("Mensaje enviado"); //TODO: Implementar funcionalidad de comentario

    useEffect(() => {
        const loadInitialData = async () => {
            const owner = await getUser(story.user_owner_id);
            setStoryOwner(owner);
        };
        loadInitialData();
        setLoading(false)
    }, [story])

    return (
        isLoading ?
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="1"
            >
                <Spinner size="xl" />
            </Box>
            :
            story && storyOwner && (
                <Box
                    position="relative"
                    height="90vh"
                    width={`calc(90vh * 9 / 16)`}
                    maxWidth="100%"
                    mx="auto"
                >

                    <>
                        <Box position="absolute" top="20px" left="20px" display="flex" alignItems="center" className="z-20">
                            <div className="relative w-[40px] h-[40px] mr-[10px]">
                                <Image
                                    src={storyOwner.profile_img}
                                    alt={storyOwner.username}
                                    fill
                                    priority
                                    sizes="40px"
                                    className="rounded-full"
                                />
                            </div>
                            <Text>{storyOwner.username}</Text>
                            <Text className="ml-2 text-xs text-gray-300">•</Text>
                            <Text className="ml-1 text-xs text-gray-300">{timeAgo(story.created_at)}</Text>
                        </Box>
                        <Image
                            src={story.url}
                            alt={storyOwner.username}
                            fill
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 60vw"
                            priority
                            style={{ objectFit: "cover" }}
                            onLoad={() => setLoading(false)}
                        />
                        <Box position="absolute" bottom={5} left={5}>
                            <div className="flex flex-row items-center justify-center">
                                <Input
                                    id={`answer-story-${storyOwner.username}`}
                                    value={answer}
                                    placeholder={`Responder a ${storyOwner.username}`}
                                    size="lg"
                                    variant="outline"
                                    outline="1px solid white"
                                    color="white"
                                    _placeholder={{ color: 'white' }}
                                    borderRadius="2xl"
                                    onChange={handleOnChangeAnswer}
                                />
                                <FaRegHeart size="50px" className="m-[20px]" onClick={handleLikeStory} />
                                <SlPaperPlane size="50px" className="mr-[20px]" onClick={handleSendComment} />
                            </div>
                        </Box>
                    </>
                </Box>
            )
    );
};

export default StoryView;
