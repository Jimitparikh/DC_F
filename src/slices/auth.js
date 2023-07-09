import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginReader, createReader, updateReader } from "../services/AuthService";

import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async (formValue, thunkAPI) => {
        try {
            const { data } = await createReader(formValue);
            if (!data.success) throw ({ error: data })
            return { user: data.reader };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (formValue, thunkAPI) => {
        try {
            const resp = await loginReader(formValue);
            // console.log(resp.data.reader, "in Slice")
            if (!resp.data.success) {
                throw ({ error: resp.data })
            }
            return { user: resp.data.reader };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const update = createAsyncThunk(
    "auth/update",
    async (formValue, thunkAPI) => {
        try {
            const resp = await updateReader(formValue);
            // console.log(resp.data.reader, "in Slice")
            if (!resp.data.success) throw ({ error: resp.data })
            return { user: resp.data.reader };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        await AuthService.logout();
    }
    catch (error) {

    }
});

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [update.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;