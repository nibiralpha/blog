import { combineReducers } from '@reduxjs/toolkit'
import blogReducer from './blogs'

const rootReducer = combineReducers(
    {
        blogs: blogReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer