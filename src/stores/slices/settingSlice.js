// libraries
import {createSlice} from '@reduxjs/toolkit';

// utils
import {backgroundList, colorList} from "utils/constants.js";

const initialState = {
    profile: {
        _id: "",
        avatar: "",
        userName: "",
        biography: "",
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
    },
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.profile._id = action.payload._id;
            state.profile.avatar = action.payload.avatar;
            state.profile.userName = action.payload.userName;
            state.profile.email = action.payload.email;
            state.profile.biography = action.payload.biography;
            state.appearance.language = action.payload.language;
            state.appearance.darkMode = action.payload.darkMode;
            state.appearance.fontSize = action.payload.fontSize;
            state.appearance.color.light = action.payload.color.light;
            state.appearance.color.dark = action.payload.color.dark;
            state.appearance.background = action.payload.background;
        },
        unSetUser: () => initialState,
        setProfile: (state, action) => {
            state.profile.avatar = action.payload.avatar;
            state.profile.userName = action.payload.userName;
            state.profile.biography = action.payload.biography;
        },
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
    setUser,
    unSetUser,
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
    setProfile,
} = settingSlice.actions;

export default settingSlice.reducer;