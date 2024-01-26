// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profile: {
        _id: "",
        avatar: "",
        userName: "",
        biography: "",
        phoneNumber: "",
    },
    appearance: {
        language: "fa",
        darkMode: false,
        color: {
            light: "#2563eb",
            dark: "#60a5fa",
        },
        background: '/images/desktop-1.jpg',
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
            state.profile.phoneNumber = action.payload.phoneNumber;
            state.appearance.language = action.payload.language;
            state.appearance.darkMode = action.payload.darkMode;
            state.appearance.color.light = action.payload.color.light;
            state.appearance.color.dark = action.payload.color.dark;
            state.appearance.background = action.payload.background;
        },
        unSetUser: () => initialState,
        setProfile: (state, action) => {
            state.profile.avatar = action.payload.avatar;
            state.profile.biography = action.payload.biography;
        },
        setLanguage: (state, action) => {
            state.appearance.language = action.payload;
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
    setColor,
    setBackground,
    setTheme,
    setProfile,
} = settingSlice.actions;

export default settingSlice.reducer;