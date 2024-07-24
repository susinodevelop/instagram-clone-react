'use client';
import { Box, Image, VStack, Text, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import { getAllPosts, getPostComments } from "@/services/PostService";
import { timeAgo } from "@/utils/DateUtils";
import { PostWithCommentsAndUsers } from "@/types/PostWithCommentsAndUsers";
import Comments from "./Comments";

const Feed = () => {

  //TODO por optimizar y arreglar llamadas rest
  const NUMBER_OF_VISIBLE_COMMENTS = 2
  const [posts, setPosts] = useState<PostWithCommentsAndUsers[]>([])
  const [user, setUser] = useState<User>({
    id: 1,
    username: "default",
    biography_name: "default",
    biography_content: "default",
    biography_url: "default",
    profile_img: "default",
    created_at: "default"
  }) //TODO revisar

  const users = new Map<number, User>()

  const getUserFromMap = async (id: number): Promise<User> => {
    let user: User;
    if (users.has(id)) {
      user = users.get(id) as User
    } else {
      user = await getUser(id);
      users.set(user.id, user)
    }
    return user
  }

  const fetchAndSetUser = async () => {
    setUser(await getUser(1))
  }

  const fetchAndSetPosts = async () => {
    const posts: Post[] = await getAllPosts();

    const postsWithCommentsAndUsers = await Promise.all(
      posts.map(async (post) => {

        const postOwner = await getUserFromMap(post.user_owner_id)
        const comments: Comment[] = await getPostComments(post.id)


        const commentsWithUsers = await Promise.all(
          comments.map(async (comment) => {
            const commentOwner = await getUserFromMap(comment.user_owner_id)
            return { ...comment, user: commentOwner };
          })
        );

        return { ...post, comments: commentsWithUsers, owner: postOwner };
      })
    );
    setPosts(postsWithCommentsAndUsers);
  };

  useEffect(() => {
    fetchAndSetUser()
    fetchAndSetPosts()

  }, [])

  //TODO revisar el estado a true
  const [showAllComments, setShowAllComments] = useState(false)
  const [actualPost, setActualPost] = useState<PostWithCommentsAndUsers>()

  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">

      {
        posts.map(post => (
          <div key={post.id} className="list-none">
            <Box >
              <div className="flex flex-row p-4 rounded-lg shadow-md">
                <ProfilePicture user={user} borderColor="red" />
                <Text className="flex items-center text-white font-bold">{post.owner.username}</Text>
                <Text className="flex items-center text-gray-500 mt-1 ml-2" fontSize="sm">{`• ${timeAgo(post.created_at)}`}</Text>
              </div>
              {/* TODO crear endpoint para imagenes segun usuario */}
              <div className="flex justify-center mb-[25px] border border-gray-900 bg-black max-h-[500px] max-w-[500px]">
                <Image
                  src={post.url}
                  alt="Image post"
                  objectFit="cover"
                  maxWidth="500px"
                  maxHeight="500px"
                />
              </div>
              <div>Le gusta a .... y mas</div> {/*TODO revisar*/}
              <div>
                <Comments visibleComments={2} post={post} />
              </div>
            </Box>
            <hr className="border-t-1 border-white my-4" />
          </div>

        ))
      }
    </VStack>
  );
};

export default Feed;
