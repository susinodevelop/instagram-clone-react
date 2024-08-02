import Reel from "@/interface/Reel";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import AllCommentsReelView from "./AllCommentsReelView";

interface ReelModalProps {
    reel: Reel
    isOpen: boolean
    onClose: () => void
}

const ReelModal = ({ reel, isOpen, onClose }: ReelModalProps) => {

    return (
        <Modal
            isOpen={isOpen}
            isCentered={true}
            size="4xl"
            onClose={onClose}
        >
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent className='mx-[50px]'>
                <AllCommentsReelView reel={reel} />
            </ModalContent>
        </Modal>
    )
}

export default ReelModal;