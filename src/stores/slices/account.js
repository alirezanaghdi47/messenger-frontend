import {createSlice} from '@reduxjs/toolkit';
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    username: "",
    phoneNumber: "",
    biography: "",
    avatar: "",
    lastSeen: "",
    status: "",
    language: "fa",
    darkMode: false,
    fontSize: 16,
    color: colorList[0].value,
    background: {
        desktop: backgroundList[0].src.desktop,
        mobile: backgroundList[0].src.mobile
    },
    accessToken: "",
    refreshToken: "",
    expireDate: "",
}

export const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setBackground: (state, action) => {
            state.background = {
                desktop: backgroundList[action.payload].src.desktop,
                mobile: backgroundList[action.payload].src.mobile,
            };
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload;
        },
    },
})

export const {
    setLanguage , setSize,setColor,setBackground,setTheme
} = account.actions

export default account.reducer