'use client'
import Story from "@/interface/Story";
import User from "@/interface/User";
import { getUser } from "@/services/UserService";
import { timeAgo } from "@/utils/DateUtils";
import { Box, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";

interface StoryViewProps {
    story: Story
}

const StoryView = ({ story }: StoryViewProps) => {

    const [currentStory, setCurrentStory] = useState<Story>(story);
    const [storyOwner, setStoryOwner] = useState<User>()
    const [answer, setAnswer] = useState<string>('')

    const handleOnChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    }

    const handleLikeStory = () => alert("Me ha gustado la foto") //TODO revisar y añadir like en bbdd

    const handleSendComment = () => alert("Mensaje enviado") //TODO revisar y añadir comentario en bbdd

    useEffect(() => {
        const loadInitialData = async () => {
            setStoryOwner(await getUser(currentStory.user_owner_id)) //TODO revisar
        }
        loadInitialData()
    }, [])

    return (
        <>
            {currentStory && storyOwner &&
                <Box
                    position="relative"
                    height="90vh"
                    width={`calc(90vh * 9 / 16)`}
                    maxWidth="100%"
                    mx="auto"
                >
                    <Box position="absolute" top="20px" left="20px" display="flex" alignItems="center" className="z-20">
                        <div className="relative w-[40px] h-[40px] mr-[10px]">
                            {/* TODO revisar las propiedades de la imagen que no muestren warnings en la consola */}
                            <Image src={storyOwner.profile_img}
                                alt={storyOwner.username}
                                fill
                                sizes="40px"
                                className="rounded-full" />
                        </div>
                        <Text>{storyOwner.username} </Text>
                        <Text className="ml-2 text-xs text-gray-300">•</Text>
                        <Text className="ml-1 text-xs text-gray-300">{timeAgo(currentStory.created_at)}</Text>
                    </Box>
                    <Image
                        src={currentStory.url}
                        alt={storyOwner.username}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 60vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <Box position="absolute" bottom={5} left={5}>
                        <div className="flex flex-row items-center justify-center">
                            <Input id={`anser-story-${storyOwner.username}`}
                                value={answer}
                                placeholder={`Responder a ${storyOwner.username}`}
                                size="lg"
                                variant="outline"
                                outline="1px solid white"
                                color="white" // Color del texto  
                                _placeholder={{ color: 'white' }} // Color del placeholder
                                borderRadius="2xl"
                                onChange={handleOnChangeAnswer}
                            />
                            <FaRegHeart size="50px" className="m-[20px]" onClick={handleLikeStory} />
                            <SlPaperPlane size="50px" className="mr-[20px]" onClick={handleSendComment} />
                        </div>
                    </Box>
                </Box >
            }
        </>
    )
}

export default StoryView;