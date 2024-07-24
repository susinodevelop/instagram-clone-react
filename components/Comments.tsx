'use client'
import { PostWithCommentsAndUsers } from "@/types/PostWithCommentsAndUsers"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { use, useEffect, useState } from "react"
import AllCommentsModal from "./AllCommentsModal"
import { getUser } from "@/services/UserService"

interface CommentsProps {
    visibleComments: number,
    post: PostWithCommentsAndUsers
}
const Comments: React.FC<CommentsProps> = ({ visibleComments, post }: CommentsProps) => {

    const [actualUser, setActualUser] = useState<User>({
        id: 2343245,
        username: "string",
        biography_name: "string",
        biography_content: "string",
        biography_url: "string",
        profile_img: "string",
        created_at: "string"

    })
    const [showAllComments, setShowAllComments] = useState(false)
    const [actualPost, setActualPost] = useState<PostWithCommentsAndUsers>()

    const handleShowAllComments = (post: PostWithCommentsAndUsers) => {
        setShowAllComments(!showAllComments)
        setActualPost(post)
    }

    const fillActualUser = async () => {
        const user = await getUser(1)
        setActualUser(user)
    }

    useEffect(() => {
        fillActualUser()
    }, [])

    return (
        <>
            <div>
                <p className='text-gray-400 w-[500px]'><strong className='text-white'>{post.owner.username}</strong> {post.description}</p>
                <ul>
                    {post.comments.slice(-visibleComments).map((comment) => {
                        return (
                            <li key={comment.id} className="my-2">
                                <span className="font-bold">{post.owner.username}  </span>
                                {comment.content}
                            </li>
                        )
                    })}
                </ul>
                {
                    visibleComments < post.comments.length
                        ? <button className="text-gray-500 text-sm my-2" onClick={() => handleShowAllComments(post)}> {/*TODO revisar esta llamada a funcion creo que no es buena practica*/}
                            Ver los {post.comments.length} comentarios
                            <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                        </button>
                        : <></>
                }
            </div>
            <Modal
                isOpen={showAllComments}
                isCentered={true}
                size="4xl"
                onClose={() => setShowAllComments(false)}
            >
                {/*TODO revisar, esta llamada a funcion esta mal */}
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This is the modal content.</p>
          </ModalBody> */}
                    {actualPost && <AllCommentsModal actualUser={actualUser} post={actualPost} />}
                    {/* <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleShowAllComments}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}
export default Comments