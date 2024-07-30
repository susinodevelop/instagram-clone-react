import { VStack } from "@chakra-ui/react";
import { getAllPosts } from "@/services/PostService";
import PostView from "./PostView";

const FeedView = async () => {

  const posts = await getAllPosts()

  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">
      {
        posts.map(post => (
          <PostView key={post.id} post={post} />
        ))
      }
    </VStack>
  );
};

export default FeedView;
