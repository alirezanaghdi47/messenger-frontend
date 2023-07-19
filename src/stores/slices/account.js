import {createSlice} from '@reduxjs/toolkit';
import {backgrounds, colors} from "@/utils/constants.js";

const initialState = {
    username: "",
    phoneNumber: "",
    biography: "",
    avatar: "",
    lastSeen: "",
    status: "",
    language: "fa",
    darkMode: false,
    size: 16,
    color: colors[0].value,
    background: {
        desktop: backgrounds[0].desktop,
        mobile: backgrounds[0].mobile
    },
    accessToken: "",
    refreshToken: "",
    expireDate: "",
}

export const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount: (state, action) => {
            state.language = action.payload.language;
        },
        removeAccount: () => initialState
    },
})

export const {
    setAccount, removeAccount
} = account.actions

export default account.reducer