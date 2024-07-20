import { useGET } from "./HttpService";

const API_URL = '/api/users';

export const getAllUsers = async (): Promise<User[]> => {
    return await useGET(API_URL)
}

export const getUser = async (userId: number): Promise<User> => {
    return await useGET(`${API_URL}/${userId}`)
}

export const getUserPosts = async (userId: number): Promise<UserPost[]> => {
    return await useGET(`${API_URL}/${userId}/posts`)
}

export const getUserStories = async (userId: number): Promise<UserStory[]> => {
    return await useGET(`${API_URL}/${userId}/stories`)
}

export const getUserNotifications = async (userId: number): Promise<UserNotification[]> => {
    return await useGET(`${API_URL}/${userId}/notifications`)
}

export const getUserMessages = async (userId: number): Promise<DirectMessage[]> => {
    return await useGET(`${API_URL}/${userId}/messages`)
}