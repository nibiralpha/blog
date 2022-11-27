import { CommentModel } from "./Comment.model";
import PostModal from "./Post.model";
import { UserModel } from "./User.model";

export interface BlogModel {
    post: PostModal,
    comments: CommentModel[],
    author: UserModel
}