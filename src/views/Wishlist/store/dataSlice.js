import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWishlist , removeFromWishlist , addToWishlist } from "../../../services/ReaderService"

export const get_Wishlist = createAsyncThunk('wishlist/getWishlist',async (data) => {
    const response = await getWishlist(data)
    console.log(response.data.wishlist[0],"<<<<<<<");
    return response.data.wishlist[0]
})

export const remove_Wishlist = createAsyncThunk('wishlist/removeFromWishlist',async (data) => {
    const response = await removeFromWishlist(data)
    return response.data
})

export const add_Wishlist = createAsyncThunk('wishlist/addToWishlist',async (data) => {
    const response = await addToWishlist(data)
    return response.data
})


const dataSlice = createSlice({
    name: 'wishlist',
    initialState: {
        loading: false,
        wishList: [],
        wishlistedBookss: [],
        wishlistedBooks: []
    },
    reducers: {
        setWishList: (state, action) => {
            state.wishList = action.payload
        }
    },
    extraReducers: {
        [get_Wishlist.fulfilled]: (state, action) => {
            state.wishList = action.payload
            state.wishlistedBookss = action.payload.wishlistedBookss
            state.wishlistedBooks = action.payload.wishlistedBooks
            state.loading = false
        },
        [get_Wishlist.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setWishList
} = dataSlice.actions

export default dataSlice.reducer