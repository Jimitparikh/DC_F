import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBookDetail, getChapters, getPages } from "../../../services/BookService"

export const get_Book = createAsyncThunk('BookData/getBookDetail', async (data) => {
    const response = await getBookDetail(data)
    return response.data
})

export const get_Chapters = createAsyncThunk('BookData/getChapters', async (data) => {
    const response = await getChapters(data)
    console.log(response);
    return response.data
})

// export const get_Pages = createAsyncThunk('BookData/getPages', async (data) => {
//     const response = await getPages({
//         bookID
//             :
//             "64a3083caba6256f5646b06f",
//         chapterID
//             :
//             "64a30898aba6256f5646b07d"
//     })
//     return response.data
// })

export const load_Book = createAsyncThunk('BookData/loadBook', async (data) => {
    const bookData = await getBookDetail(data)
    let cdata;
    if (bookData?.data?.book?.isBookChapterWise) {
        const chapterData = await getChapters(data)
        cdata = chapterData?.data?.chapters;
    }
    const pageGetData = {
        ...data
    };
    console.log(pageGetData);
    if (cdata?.[0]?._id) pageGetData.chapterID = cdata[0]?._id;
    const page = await getPages(pageGetData)
    const pageData = page?.data?.bookContent?.bookPages || [];
    return {
        bookDetails: bookData?.data?.book,
        chapterData : cdata,
        pageData,
    }
})

export const load_Chapter = createAsyncThunk('BookData/loadChapter', async (ids) => {

    console.log(ids);
    const bookData = await getBookDetail(ids)
    let cdata;
    if (bookData?.data?.book?.isBookChapterWise) {
        const chapterData = await getChapters(ids)
        cdata = chapterData?.data?.chapters;
    }
  
    // if (cdata?.[0]?._id) pageGetData.chapterID = cdata[0]?._id;
    const page = await getPages(ids)
    const pageData = page?.data?.bookContent?.bookPages || [];
    return {
        bookDetails: bookData?.data?.book,
        chapterData : cdata,
        pageData,
    }
})


const dataSlice = createSlice({
    name: 'bookData',
    initialState: {
        loading: false,
        BookDetail: [],
        Chapters: [],
        // Pages: [],
        CurrentPageNumber : "",
        BookData: [],
        CurrentPage: [],
        CurrentChapter: ""
    },
    reducers: {
        setBook: (state, action) => {
            state.BookDetail = action.payload.book
        },
        setCurrentPage: (state, action) => {
            state.CurrentPage = action.payload
        },
        setCurrentPageNumber : (state, action) => {
            state.CurrentPageNumber = action.payload
        },
        setCurrentChapter : (state, action) => {
            state.CurrentPageNumber = action.payload
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
        [get_Book.rejected]: (state) => {
            state.loading = false
            state.BookDetail = [];
        },
        [load_Book.fulfilled]: (state, action) => {
            state.BookData = action.payload
            state.CurrentPage = action.payload.pageData?.[0]
            state.loading = false
        },
        [load_Book.pending]: (state) => {
            state.loading = true
        },
        [load_Book.rejected]: (state) => {
            state.loading = false
            state.BookData = [];
        },
        [load_Chapter.fulfilled]: (state, action) => {
            state.BookData = action.payload
            state.CurrentPage = action.payload.pageData?.[0]
            state.loading = false
        },
        [load_Chapter.pending]: (state) => {
            state.loading = true
        },
        [load_Chapter.rejected]: (state) => {
            state.loading = false
            state.BookData = [];
        },
        [get_Chapters.fulfilled]: (state, action) => {
            state.Chapters = action.payload.chapters
            state.loading = false
        },
        [get_Chapters.pending]: (state) => {
            state.loading = true
        },
        [get_Chapters.rejected]: (state) => {
            state.loading = false
            state.Chapters = [];
        },
        // [get_Pages.fulfilled]: (state, action) => {
        //     state.Pages = action.payload
        //     state.loading = false
        // },
        // [get_Pages.pending]: (state) => {
        //     state.loading = true
        // },
        // [get_Pages.rejected]: (state) => {
        //     state.loading = false
        //     state.Pages = [];
        // },
    }
})

export const {
    setBook,
    setCurrentPage,
    setCurrentPageNumber
} = dataSlice.actions

export default dataSlice.reducer