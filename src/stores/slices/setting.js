// libraries
import {createSlice} from '@reduxjs/toolkit';

// utils
import {backgroundList, colorList} from "utils/constants.js";

const initialState = {
    profile: {
        avatar: "",
        name: "",
        userName: "",
        phoneNumber: "",
        biography: "",
        lastSeen: "",
        isOnline: false,
        accessToken: "",
        refreshToken: "",
        expireDate: "",
    },
    appearance: {
        language: "fa",
        darkMode: false,
        fontSize: 14,
        color: {
            light: colorList[0].color.light,
            dark: colorList[0].color.dark,
        },
        background: backgroundList[0].background,
    }
}

export const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.appearance.language = action.payload;
        },
        setFontSize: (state, action) => {
            state.appearance.fontSize = action.payload;
        },
        setColor: (state, action) => {
            state.appearance.color = action.payload;
        },
        setBackground: (state, action) => {
            state.appearance.background = action.payload;
        },
        setTheme: (state, action) => {
            state.appearance.darkMode = action.payload;
        },
    },
})

export const {
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
} = setting.actions;

export default setting.reducer;