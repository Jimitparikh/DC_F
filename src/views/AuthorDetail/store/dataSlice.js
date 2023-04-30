import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addAuthorReview , getAuthorDetail, getAuthorReviews } from '../../../services/AuthorService'

export const get_Reviews = createAsyncThunk('authorDetail/getAuthorReviews',async (data) => {
    const response = await getAuthorReviews(data)
    return response.data
})

export const add_Review = createAsyncThunk('authorDetail/addAuthorReview',async (data) => {
    const response = await addAuthorReview(data)
    return response.data
})

export const get_AuthorDetail = createAsyncThunk('authorDetail/get_AuthorDetail',async (data) => {
    const response = await getAuthorDetail(data)
    console.log(response,"authorDEtail")
    return response.data
})


const dataSlice = createSlice({
    name: 'authorDetail',
    initialState: {
        loading: false,
        reviewsList: [],
        reviewsCount: "",
        author:[]
    },
    reducers: {
        setReviewsList: (state, action) => {
            state.reviewsList = action.payload.responseData
            state.reviewsCount = action.payload.count
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_Reviews.fulfilled, (state, action) => {
            state.reviewsList = action.payload.responseData
            state.reviewsCount = action.payload.count
            state.loading = false
        })
        builder.addCase(get_Reviews.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(get_Reviews.rejected, (state, action) => {
            state.loading = false
            state.reviewsCount = 0
            state.reviewsList = []
        })
        builder.addCase(get_AuthorDetail.fulfilled, (state, action) => {
            state.author = action.payload.author
            state.loading = false
        })
        builder.addCase(get_AuthorDetail.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(get_AuthorDetail.rejected, (state, action) => {
            state.loading = false
            state.author = []
        })
    }
})

export const { 
    setReviewsList
} = dataSlice.actions

export default dataSlice.reducer