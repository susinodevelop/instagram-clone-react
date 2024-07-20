'use client';
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import { getAllPosts, getPostComments } from "@/services/PostService";
import { timeAgo } from "@/utils/DateUtils";

type PostWithCommentsAndUsers = Post & {
  comments: (Comment & { user: User })[];
};
const Feed = () => {

  //TODO por optimizar y arreglar llamadas rest
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

  const fetchAndSetUser = async () => {
    setUser(await getUser(1))
  }

  const fetchAndSetPosts = async () => {
    const posts: Post[] = await getAllPosts();

    const postsWithCommentsAndUsers = await Promise.all(
      posts.map(async (post) => {
        const comments: Comment[] = await getPostComments(post.id);

        const commentsWithUsers = await Promise.all(
          comments.map(async (comment) => {
            const user: User = await getUser(comment.user_owner_id);
            return { ...comment, user };
          })
        );

        return { ...post, comments: commentsWithUsers };
      })
    );

    setPosts(postsWithCommentsAndUsers);
  };

  useEffect(() => {
    fetchAndSetUser()
    fetchAndSetPosts()
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
                  post.comments.map((comment) => {

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
