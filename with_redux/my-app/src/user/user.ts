import {createSlice} from "@reduxjs/toolkit";

export interface IUser {
    isLoggedIn: boolean;
}

export const initialState: IUser = {
    isLoggedIn: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;