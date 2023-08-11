// libraries
import {createSlice} from '@reduxjs/toolkit';

// utils
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    activeProfile: null,
    account: {
        avatar: "",
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        biography: "",
        lastSeen: "",
        isOnline: false,
        accessToken: "",
        refreshToken: "",
        expireDate: "",
    },
    setting: {
        setup: "language",
        dateFormat: "24h",
        keyboard: "enter",
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
}

export const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setActiveProfile: (state, action) => {
            state.activeProfile = action.payload;
        },
        removeActiveProfile: (state) => {
            state.activeProfile = initialState.activeProfile
        },
        setKeyboard: (state, action) => {
            state.setting.keyboard = action.payload;
        },
        setDateFormat: (state, action) => {
            state.setting.dateFormat = action.payload;
        },
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
    setActiveProfile,
    removeActiveProfile,
    setKeyboard,
    setDateFormat,
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
    setSetup,
} = profile.actions;

export default profile.reducer;