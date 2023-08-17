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
        dateFormat: "24h",
        notification: ["chat" , "group" , "story"],
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
            state.setting.background = backgroundList[action.payload].background;
        },
        setTheme: (state, action) => {
            state.setting.darkMode = action.payload;
        },
        setNotification: (state, action) => {
            state.setting.notification = action.payload;
        },
    },
})

export const {
    setActiveProfile,
    removeActiveProfile,
    setDateFormat,
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
    setNotification,
} = profile.actions;

export default profile.reducer;