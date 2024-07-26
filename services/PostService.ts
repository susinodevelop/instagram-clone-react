import UserPost from "@/interface/UserPost";
import { useGET, usePOST } from "./HttpService";
import Comment from "@/interface/Comment";
import NewComment from "@/interface/NewComment";

const API_URL = '/api/posts';

export const getAllPosts = async (): Promise<UserPost[]> => {
    return await useGET(API_URL);
}

export const getPostComments = async (postId: number): Promise<Comment[]> => {
    return await useGET(`${API_URL}/${postId}/comments`)
}

export const addNewPostComment = async (postId: number, comment: NewComment): Promise<void> => {

    const props = {
        url: `${API_URL}/${postId}/comments`,
        pathParams: { postId: postId.toString() },
        bodyParams: comment
    };

    return await usePOST(props);
}