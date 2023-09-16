import { UserModel } from "./user-model";

export default interface ImageModel {
    id: string,
    source: string,
    alt: string,
    author: UserModel
}