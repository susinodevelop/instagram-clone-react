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
    story: Story
    showComments?: boolean
    showLike?: boolean
}

const StoryView = ({ story, showComments = true, showLike = true }: StoryViewProps) => {
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

    const html_spiner = (
        <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
        >
            <Spinner size="xl" />
        </Box>
    )

    const html_story_viewer = (
        story && storyOwner &&
        <Box
            position="relative"
            height="90vh"
            width={`calc(90vh * 9 / 16)`}
        >
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
            />
            <Box position="absolute" bottom={5} width="100%" zIndex={10}>
                <div className="flex flex-row items-center justify-center h-[75px]">
                    <div className="w-[70%] h-[50px]">
                        {
                            showComments &&
                            <Input
                                id={`answer-story-${storyOwner.username}`}
                                value={answer}
                                placeholder={`Responder a ${storyOwner.username}`}
                                height="100%"
                                width="100%"
                                variant="outline"
                                outline="1px solid white"
                                color="white"
                                _placeholder={{ color: 'white' }}
                                borderRadius="2xl"
                                onChange={handleOnChangeAnswer}
                            />
                        }
                    </div>
                    <div className="flex flex-row w-[25%] h-[50px] items-center justify-center">
                        {
                            showLike &&
                            <Box
                                as="button"
                                backgroundColor="transparent"
                                marginX="1em"
                                onClick={handleLikeStory}
                            >
                                <FaRegHeart size="2em" />
                            </Box>
                        }
                        {
                            showComments &&
                            <Box
                                as="button"
                                backgroundColor="transparent"
                                marginRight="1em"
                                onClick={handleSendComment}
                            >
                                <SlPaperPlane size="2em" />
                            </Box>
                        }
                    </div>
                </div>
            </Box>
        </Box>
    )

    return (
        <>
            {
                isLoading
                    ? html_spiner
                    : html_story_viewer
            }

        </>
    )
}

export default StoryView;
