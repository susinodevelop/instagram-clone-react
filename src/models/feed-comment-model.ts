import { UserModel } from "./user-model";

export interface FeedCommentModel {
    id: string,
    comment: String,
    user: UserModel
}