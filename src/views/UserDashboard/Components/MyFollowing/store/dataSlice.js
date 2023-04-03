import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFollowings, unFollowAuthor, followAuthor } from '../../../../../services/ReaderService';

export const get_Author = createAsyncThunk('reader/getFollowings',async (data) => {
    const response = await getFollowings(data)
    return response.data
})

export const unfollow_Author = createAsyncThunk('reader/unFollowAuthor',async (data) => {
    const response = await unFollowAuthor(data)
    return response.data
})

export const follow_Author = createAsyncThunk('reader/followAuthor',async (data) => {
    const response = await followAuthor(data)
    return response.data
})


const dataSlice = createSlice({
    name: 'following',
    initialState: {
        loading: false,
        followings: [],
    },
    reducers: {
        setFollowing: (state, action) => {
            state.followings = action.payload
        }
    },
    extraReducers: {
        [get_Author.fulfilled]: (state, action) => {
            state.followings = action.payload
            state.loading = false
        },
        [get_Author.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setFollowing
} = dataSlice.actions

export default dataSlice.reducer