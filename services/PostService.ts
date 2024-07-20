import { useGET } from "./HttpService";

const API_URL = '/api/posts';

export const getAllPosts = async (): Promise<UserPost[]> => {
    return await useGET(API_URL);
}

export const getPostComments = async (postId: number): Promise<Comment[]> => {
    return await useGET(`${API_URL}/${postId}/comments`)
}