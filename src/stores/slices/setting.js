// libraries
import {createSlice} from '@reduxjs/toolkit';
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    activeSetting: null,
    profile: {
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
    appearance: {
        dateFormat: "24h",
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
        setActiveSetting: (state, action) => {
            state.activeSetting = action.payload;
        },
        removeActiveSetting: (state) => {
            state.activeSetting = initialState.activeSetting
        },
        setDateFormat: (state, action) => {
            state.appearance.dateFormat = action.payload;
        },
        setLanguage: (state, action) => {
            state.appearance.language = action.payload;
        },
        setFontSize: (state, action) => {
            state.appearance.fontSize = action.payload;
        },
        setColor: (state, action) => {
            state.appearance.color = {
                light: colorList[action.payload].color.light,
                dark: colorList[action.payload].color.dark,
            };
        },
        setBackground: (state, action) => {
            state.appearance.background = backgroundList[action.payload].background;
        },
        setTheme: (state, action) => {
            state.appearance.darkMode = action.payload;
        },
    },
})

export const {
    setActiveSetting,
    removeActiveSetting,
    setDateFormat,
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
} = setting.actions;

export default setting.reducer;