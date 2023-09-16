import { UserModel } from "./user-model";

export default interface VideoModel{
    source: string,
    type: string,
    author: UserModel
}