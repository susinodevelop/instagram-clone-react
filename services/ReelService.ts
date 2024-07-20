import { useGET } from "./HttpService";

const API_URL = '/api/reels';

export const getAllReels = async (): Promise<Reel[]> => {
    return await useGET(API_URL)
}

export const getReel = async (reelId: number): Promise<UserReel> => {
    return await useGET(`${API_URL}/${reelId}`)
}