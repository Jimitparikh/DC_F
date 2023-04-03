import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addCard ,getCardDetailForUser , deleteCard } from '../../../../../services/PaymentService'

export const add_Card = createAsyncThunk('card/addCard',async (data) => {
    console.log(data,"<<<req")
    const response = await addCard(data)
    console.log(response, "<<<<< Add Card");
    return response.data
})

export const get_Cards = createAsyncThunk('card/getCardDetailForUser',async (data) => {
    const response = await getCardDetailForUser(data)
    console.log(response, "<<<<< get Card");
    return response.data
})

export const delete_Cards = createAsyncThunk('card/deleteCard',async (data) => {
    const response = await deleteCard(data)
    console.log(response, "<<<<< delete Card");
    return response.data
})


const dataSlice = createSlice({
    name: 'card',
    initialState: {
        loading: false,
        cardList: [],
    },
    reducers: {
        setCardList : (state, action) => {
            state.cardList = action.payload.responseData
        }
    },
    extraReducers: {
        [get_Cards.fulfilled]: (state, action) => {
            state.cardList = action.payload.responseData
            state.loading = false
        },
        [get_Cards.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setCardList
} = dataSlice.actions

export default dataSlice.reducer