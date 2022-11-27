import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { BlogModel } from '../model/Blog.model';

export interface BlogState {
    blogs: Array<BlogModel>,
    loading: boolean
}

const defaultBlogState: BlogState = {
    blogs: [],
    loading: true
}

export const blogSlice = createSlice(
    {
        name: 'blogs',
        initialState: defaultBlogState,
        reducers: {
            setBlogs: (state, action: PayloadAction<BlogModel[]>) => {
                return { ...state, blogs: action.payload }
            },
            startLoading: (state) => {
                return { ...state, loading: true }
            },
            stopLoading: (state) => {
                return { ...state, loading: false }
            },
            removeBlog: (state: any, action: PayloadAction<BlogModel>) => {
                let findIndex = state.blogs.findIndex((state: any) => state.post.id == action.payload.post.id);
                state.blogs.splice(findIndex, 1);
            }
        },
    }
)

export const { setBlogs, startLoading, stopLoading, removeBlog } = blogSlice.actions

export default blogSlice.reducer
