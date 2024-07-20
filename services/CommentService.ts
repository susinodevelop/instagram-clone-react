import { useGET } from "./HttpService";

const API_URL = '/api/comments';

export const getAllComments = async (): Promise<Comment[]> => {
    return await useGET(API_URL)
}
