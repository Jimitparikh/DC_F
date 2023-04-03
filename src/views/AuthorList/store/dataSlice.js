import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthor } from "../../../services/AuthorService"

export const get_authorList = createAsyncThunk('authorList/getAuthor',async (data) => {
    const response = await getAuthor(data)
    return response.data
})


const dataSlice = createSlice({
    name: 'authorlist',
    initialState: {
        loading: false,
        authorList: [],
    },
    reducers: {
        setAuthorList: (state, action) => {
            state.authorList = action.payload
        }
    },
    extraReducers: {
        [get_authorList.fulfilled]: (state, action) => {
            state.authorList = action.payload
            state.loading = false
        },
        [get_authorList.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setAuthorList
} = dataSlice.actions

export default dataSlice.reducer