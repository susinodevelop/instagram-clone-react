'use client';
import { Box, Image, VStack, Text, Modal, ModalContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "@/services/UserService";
import ProfilePicture from "./ProfilePicture";
import { getAllPosts, getPostComments } from "@/services/PostService";
import { timeAgo } from "@/utils/DateUtils";
import AllCommentsView from "./AllCommentsView";
import { PostWithCommentsAndUsers } from "@/types/PostWithCommentsAndUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

        const owner = await getUser(post.user_owner_id)

        return { ...post, comments: commentsWithUsers, owner: owner };
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

  const handleShowAllComments = (post: PostWithCommentsAndUsers) => {
    setShowAllComments(!showAllComments)
    setActualPost(post)
  }

  const showComments = (post: PostWithCommentsAndUsers) => {
    if (post.comments.length <= NUMBER_OF_VISIBLE_COMMENTS || !showAllComments) {
      return (
        <div>
          <ul>
            {post.comments.slice(-3).map((comment) => {
              return (
                <li key={comment.id} className="my-2">
                  <span className="font-bold">{user.username}  </span>
                  {comment.content}
                </li>
              )
            })}
          </ul>
          {
            NUMBER_OF_VISIBLE_COMMENTS < post.comments.length
              ? <button className="text-gray-500 text-sm my-2" onClick={() => handleShowAllComments(post)}> {/*TODO revisar esta llamada a funcion creo que no es buena practica*/}
                Ver los {post.comments.length} comentarios
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              : <></>
          }
        </div>
      )
    }
  }

  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">

      {
        posts.map(post => (
          <div key={post.id} className="list-none">
            <Box >
              <div className="flex flex-row p-4 rounded-lg shadow-md">
                <ProfilePicture user={user} borderColor="red" textColor="white" />
                <Text className="flex items-center text-gray-500 mt-1 ml-2" fontSize="sm">{`• ${timeAgo(post.created_at)}`}</Text>
              </div>
              {/* TODO crear endpoint para imagenes segun usuario */}
              <Image className="h-[500px] w-[500px]" src={post.url} />
              <div>Le gusta a .... y mas</div> {/*TODO revisar*/}
              <div>
                {showComments(post)}
              </div>
            </Box>
            <hr className="border-t-1 border-white my-4" />
          </div>

        ))
      }
      <Modal
        isOpen={showAllComments}
        isCentered={true}
        size="4xl"
        onClose={() => setShowAllComments(false)}
      >
        {/*TODO revisar, esta llamada a funcion esta mal */}
        {/* <ModalOverlay /> */}
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This is the modal content.</p>
          </ModalBody> */}
          {actualPost && <AllCommentsView post={actualPost} />}
          {/* <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleShowAllComments}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Feed;
