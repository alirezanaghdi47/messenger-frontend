// libraries
import {createSlice} from '@reduxjs/toolkit';

// utils
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    avatar: "",
    firstName: "",
    lastName: "",
    userName: "",
    birthDay: "",
    gender: "",
    phoneNumber: "",
    biography: "",
    lastSeen: "",
    isOnline: false,
    accessToken: "",
    refreshToken: "",
    expireDate: "",
    setup: "language",
    language: "fa",
    darkMode: false,
    fontSize: 14,
    color: {
        light: colorList[0].color.light,
        dark: colorList[0].color.dark,
    },
    background: {
        desktop: backgroundList[0].background.desktop,
        mobile: backgroundList[0].background.mobile
    },
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setColor: (state, action) => {
            state.color = {
                light: colorList[action.payload].color.light,
                dark: colorList[action.payload].color.dark,
            };
        },
        setBackground: (state, action) => {
            state.background = {
                desktop: backgroundList[action.payload].background.desktop,
                mobile: backgroundList[action.payload].background.mobile,
            };
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload;
        },
        setSetup: (state, action) => {
            state.setup = action.payload;
        },
    },
})

export const {
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
    setSetup,
} = user.actions;

export default user.reducer;