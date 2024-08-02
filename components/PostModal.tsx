import Post from "@/interface/Post";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import AllCommentsPostView from "./AllCommentsPostView";

interface PostModalProps {
    post: Post
    isOpen: boolean
    onClose: () => void
}

const PostModal = ({ post, isOpen, onClose }: PostModalProps) => {

    return (
        <Modal
            isOpen={isOpen}
            isCentered={true}
            size="6xl"
            onClose={onClose}
        >
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent className='mx-[50px]'>
                <AllCommentsPostView post={post} />
            </ModalContent>
        </Modal>
    )
}

export default PostModal;