import {createSlice} from '@reduxjs/toolkit';
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    profile: {
        username: "",
        phoneNumber: "",
        biography: "",
        avatar: "",
        lastSeen: "",
        isOnline: false,
        accessToken: "",
        refreshToken: "",
        expireDate: "",
    },
    setting: {
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
    },
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.setting.language = action.payload;
        },
        setFontSize: (state, action) => {
            state.setting.fontSize = action.payload;
        },
        setColor: (state, action) => {
            state.setting.color = {
                light: colorList[action.payload].color.light,
                dark: colorList[action.payload].color.dark,
            };
        },
        setBackground: (state, action) => {
            state.setting.background = {
                desktop: backgroundList[action.payload].background.desktop,
                mobile: backgroundList[action.payload].background.mobile,
            };
        },
        setTheme: (state, action) => {
            state.setting.darkMode = action.payload;
        },
        setSetup: (state, action) => {
            state.setting.setup = action.payload;
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