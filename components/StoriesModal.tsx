import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import StoriesViewer from "./StoriesViewer";
import Story from "@/interface/Story";

interface StoriesModalProps {
    stories: Story[]
    isOpen: boolean
    onClose: () => void
}

const StoriesModal = ({ stories, isOpen, onClose }: StoriesModalProps) => {

    if (!stories || stories.length === 0) {
        onClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            isCentered
            size="full"
            onClose={onClose}>
            <ModalContent bg="black">
                <StoriesViewer stories={stories} close={onClose} />
            </ModalContent>

        </Modal>
    )
}

export default StoriesModal;