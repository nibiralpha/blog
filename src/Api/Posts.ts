import axios, { AxiosResponse } from 'axios';
import { API_END_POINT } from '../constants/general';
import { CommentModel } from '../model/Comment.model';
import PostModel from "../model/Post.model";
import { UserModel } from '../model/User.model';

const fetchPostsData = async (): Promise<PostModel[]> => {
    const response: AxiosResponse = await axios.get<PostModel[]>(`${API_END_POINT}/posts`)
    return response.data
}

const fetchCommentsData = async (): Promise<CommentModel[]> => {
    const response: AxiosResponse = await axios.get<CommentModel[]>(`${API_END_POINT}/comments`)
    return response.data
}

const fetchAuthorData = async (): Promise<UserModel[]> => {
    const response: AxiosResponse = await axios.get<UserModel[]>(`${API_END_POINT}/users`)
    return response.data
}

export { fetchPostsData, fetchCommentsData, fetchAuthorData }
