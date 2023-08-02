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
        color: colorList[0].value,
        background: {
            desktop: backgroundList[0].src.desktop,
            mobile: backgroundList[0].src.mobile
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
            state.setting.color = action.payload;
        },
        setBackground: (state, action) => {
            state.setting.background = {
                desktop: backgroundList[action.payload].src.desktop,
                mobile: backgroundList[action.payload].src.mobile,
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