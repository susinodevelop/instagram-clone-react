import User from "@/interface/User";
import { useGET } from "./HttpService";
import DirectMessage from "@/interface/DirectMessage";
import UserNotification from "@/interface/UserNotification";
import UserPost from "@/interface/UserPost";
import UserStory from "@/interface/UserStory";
import Reel from "@/interface/Reel";

const API_URL = '/api/users';

export const getAllUsers = async (): Promise<User[]> => {
    return await useGET(API_URL, { cache: 'no-store' })
}

export const getUser = async (userId: number): Promise<User> => {
    return await useGET(`${API_URL}/${userId}`, { cache: 'no-store' })
}

export const getUserPosts = async (userId: number): Promise<UserPost[]> => {
    return await useGET(`${API_URL}/${userId}/posts`, { cache: 'no-store' })
}

export const getUserStories = async (userId: number): Promise<UserStory[]> => {
    return await useGET(`${API_URL}/${userId}/stories`, { cache: 'no-store' })
}

export const getUserNotifications = async (userId: number): Promise<UserNotification[]> => {
    return await useGET(`${API_URL}/${userId}/notifications`, { cache: 'no-store' })
}

export const getUserMessages = async (userId: number): Promise<DirectMessage[]> => {
    return await useGET(`${API_URL}/${userId}/messages`, { cache: 'no-store' })
}

export const getUserReels = async (userId: number): Promise<Reel[]> => {
    return await useGET(`${API_URL}/${userId}/reels`, { cache: 'no-store' })
}