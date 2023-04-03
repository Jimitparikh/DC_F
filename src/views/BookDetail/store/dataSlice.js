import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBookDetail } from "../../../services/BookService"

export const get_Book = createAsyncThunk('Book/getBookDetail',async (data) => {
    const response = await getBookDetail(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'book',
    initialState: {
        loading: false,
        BookDetail: [],
    },
    reducers: {
        setBook: (state, action) => {
            state.BookDetail = action.payload.book
        }
    },
    extraReducers: {
        [get_Book.fulfilled]: (state, action) => {
            state.BookDetail = action.payload.book
            state.loading = false
        },
        [get_Book.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setBook
} = dataSlice.actions

export default dataSlice.reducer