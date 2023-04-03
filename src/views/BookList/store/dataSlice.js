import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBooklist } from "../../../services/BookService"

export const get_Books = createAsyncThunk('Books/getBooklist',async (data) => {
    const response = await getBooklist(data)
    return response.data
})


const dataSlice = createSlice({
    name: 'books',
    initialState: {
        loading: false,
        bookList: [],
    },
    reducers: {
        setBookList: (state, action) => {
            state.bookList = action.payload
        }
    },
    extraReducers: {
        [get_Books.fulfilled]: (state, action) => {
            state.bookList = action.payload
            state.loading = false
        },
        [get_Books.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setBookList
} = dataSlice.actions

export default dataSlice.reducer