import UserPost from "@/interface/UserPost";
import { useGET } from "./HttpService";
import Comment from "@/interface/Comment";

const API_URL = '/api/posts';

export const getAllPosts = async (): Promise<UserPost[]> => {
    return await useGET(API_URL);
}

export const getPostComments = async (postId: number): Promise<Comment[]> => {
    return await useGET(`${API_URL}/${postId}/comments`)
}