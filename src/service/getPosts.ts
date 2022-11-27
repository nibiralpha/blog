import axios, { AxiosResponse } from 'axios';
// import { API_END_POINT } from 'src/constants/general';
import { setBlogs, startLoading, stopLoading } from '../../src/store/blogs';
import { fetchAuthorData, fetchCommentsData, fetchPostsData } from '../Api/Posts';
import { BlogModel } from '../model/Blog.model';
import { CommentModel } from '../model/Comment.model';
import PostModal from '../model/Post.model';
import { UserModel } from '../model/User.model';

const getPosts = () => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading())

            let blogs: BlogModel[] = [];
            const postData: PostModal[] = await fetchPostsData()
            const commentData: CommentModel[] = await fetchCommentsData()
            const authorData: UserModel[] = await fetchAuthorData()

            const tweentyPosts = postData.splice(0, 20)

            tweentyPosts.forEach((post: PostModal) => {
                let currentBlog: any = {
                    post: {},
                    comments: [],
                    author: {},
                    photo: {}
                };
                currentBlog.post = post

                commentData.forEach((comment: CommentModel) => {
                    if (comment.postId == post.id) {
                        currentBlog.comments.push(comment)
                    }
                })

                authorData.forEach((author: UserModel) => {

                    if (author.id == post.userId) {
                        currentBlog.author = author
                    }
                })

                blogs.push(currentBlog)
            });

            dispatch(setBlogs(blogs))
            dispatch(stopLoading())
        } catch (error) {
            console.log(error);
            dispatch(stopLoading())
            throw error
        }
    }
}

export { getPosts }
