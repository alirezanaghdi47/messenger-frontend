import {createSlice} from '@reduxjs/toolkit';
import {backgroundList, colorList} from "@/utils/constants.js";

const initialState = {
    account: {
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
    setting:{
        language: "fa",
        darkMode: true,
        fontSize: 16,
        color: colorList[0].value,
        background: {
            desktop: backgroundList[0].src.desktop,
            mobile: backgroundList[0].src.mobile
        },
        activity: "language"
    }
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
        setActivity: (state, action) => {
            state.setting.activity = action.payload;
        },
    },
})

export const {
    setLanguage ,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
    setActivity
} = user.actions;

export default user.reducer;