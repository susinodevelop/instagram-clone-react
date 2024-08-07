import User from "@/interface/User";
import { useGET } from "./HttpService";
import DirectMessage from "@/interface/DirectMessage";
import Reel from "@/interface/Reel";
import Post from "@/interface/Post";
import Story from "@/interface/Story";
import Notification from "@/interface/Notification";

const API_URL = '/api/users';

export const getAllUsers = async (): Promise<User[]> => {
    return await useGET(API_URL, { cache: 'no-store' })
}

export const getUser = async (userId: number): Promise<User> => {
    return await useGET(`${API_URL}/${userId}`, { cache: 'no-store' })
}

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    return await useGET(`${API_URL}/${userId}/posts`, { cache: 'no-store' })
}

export const getUserStories = async (userId: number): Promise<Story[]> => {
    return await useGET(`${API_URL}/${userId}/stories`, { cache: 'no-store' })
}

export const getUserNotifications = async (userId: number): Promise<Notification[]> => {
    return await useGET(`${API_URL}/${userId}/notifications`, { cache: 'no-store' })
}

export const getUserMessages = async (userId: number): Promise<DirectMessage[]> => {
    return await useGET(`${API_URL}/${userId}/messages`, { cache: 'no-store' })
}

export const getUserReels = async (userId: number): Promise<Reel[]> => {
    return await useGET(`${API_URL}/${userId}/reels`, { cache: 'no-store' })
}