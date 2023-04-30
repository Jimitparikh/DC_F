import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFollowings, unFollowAuthor, followAuthor } from '../../../../../services/ReaderService';

export const get_Followings = createAsyncThunk('reader/getFollowings',async (data) => {
    const response = await getFollowings(data)
    console.log(response.data.follows[0],"in Get Followings");
    return response.data.follows[0]
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
    extraReducers : (builder) =>{
        builder.addCase(get_Followings.fulfilled, (state, action) => {
            state.followings = action.payload
            state.loading = false
        })
        builder.addCase(get_Followings.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(get_Followings.rejected, (state, action) => {
            state.loading = false
            state.followings = []
        })
    }
})

export const { 
    setFollowing
} = dataSlice.actions

export default dataSlice.reducer