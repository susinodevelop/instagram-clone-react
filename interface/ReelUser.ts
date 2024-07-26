import Reel from "./Reel";
import User from "./User";

export default interface ReelUser extends Reel {
    user: User
}