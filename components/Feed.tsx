'use client';
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import { getAllPosts } from "@/services/PostService";
import { getAllComments } from "@/services/CommentService";
import { timeAgo } from "@/utils/DateUtils";

const Feed = () => {

  //TODO por optimizar y arreglar llamadas rest
  const [posts, setPosts] = useState<UserPost[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [user, setUser] = useState<User>({
    id: 2345,
    username: "string",
    biography_name: "string",
    biography_content: "string",
    biography_url: "string",
    profile_img: "string",
    created_at: "string"
  })

  const fetchAndSetPosts = async () => {
    setPosts(await getAllPosts())
  }

  const fetchAndSetUser = async () => {
    setUser(await getUser(1))
  }

  const fetchAndSetComments = async () => {
    setComments(await getAllComments())
  }

  useEffect(() => {
    fetchAndSetPosts()
    fetchAndSetUser()
    fetchAndSetComments()
  }, [])


  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">

      {
        posts.map(post => (
          <div key={post.id} className="list-none">
            <Box >
              <div className="flex flex-row p-4 rounded-lg shadow-md">
                <ProfilePicture user={user} borderColor="red" />
                <Text className="flex items-center text-gray-500 mt-1 ml-2" fontSize="sm">{`• ${timeAgo(post.created_at)}`}</Text>
              </div>
              {/* TODO crear endpoint para imagenes segun usuario */}
              <Image className="h-[500px] w-[500px]" src={post.url} />
              <div>Le gusta a .... y mas</div> {/*TODO revisar*/}
              <ul>
                {
                  comments.map((comment) => {

                    return (
                      <li key={comment.id}>
                        <span className="font-bold">{user.username}  </span>
                        {comment.content}
                      </li>
                    )
                  })
                }
              </ul>
            </Box>
            <hr className="border-t-1 border-white my-4" />
          </div>

        ))
      }


    </VStack>
  );
};

export default Feed;
