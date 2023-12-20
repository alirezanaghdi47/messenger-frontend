// libraries
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// services
import {
    editBackgroundService,
    editColorService,
    editFontSizeService,
    editLanguageService,
    editProfileService,
    editThemeService,
    editVisibilityService,
} from "services/userService";
import {getAllBlockUserService} from "services/blockService";
import {getAllLoginHistoryService} from "services/historyService";

// utils
import {backgroundList, colorList} from "utils/constants.js";

export const editProfile = createAsyncThunk('setting/editProfile', async (arg, thunkAPI) => {
        try {
            const response = await editProfileService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editLanguage = createAsyncThunk('setting/editLanguage', async (arg, thunkAPI) => {
        try {
            const response = await editLanguageService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editTheme = createAsyncThunk('setting/editTheme', async (arg, thunkAPI) => {
        try {
            const response = await editThemeService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editFontSize = createAsyncThunk('setting/editFontSize', async (arg, thunkAPI) => {
        try {
            const response = await editFontSizeService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editColor = createAsyncThunk('setting/editColor', async (arg, thunkAPI) => {
        try {
            const response = await editColorService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editBackground = createAsyncThunk('setting/editBackground', async (arg, thunkAPI) => {
        try {
            const response = await editBackgroundService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const editVisibility = createAsyncThunk('setting/editVisibility', async (arg, thunkAPI) => {
        try {
            const response = await editVisibilityService(arg);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getAllLoginHistory = createAsyncThunk('setting/getAllLoginHistory', async (arg, thunkAPI) => {
        try {
            const response = await getAllLoginHistoryService();
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getAllBlockUser = createAsyncThunk('setting/getAllBlockUser', async (arg, thunkAPI) => {
        try {
            const response = await getAllBlockUserService();
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const initialState = {
    profile: {
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
    privacy: {
        loginHistories: [],
        blockUsers: [],
        isVisible: true,
    },
}

export const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setUser: (state, action) => {
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
            state.privacy.isVisible = action.payload.isVisible;
        },
        unSetUser: () => initialState,
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
    extraReducers: (builder) => {
        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.profile.avatar = action.payload.avatar;
            state.profile.userName = action.payload.userName;
            state.profile.biography = action.payload.biography;
        });
        builder.addCase(editLanguage.fulfilled, (state, action) => {
            state.appearance.language = action.payload;
        });
        builder.addCase(editTheme.fulfilled, (state, action) => {
            state.appearance.darkMode = action.payload;
        });
        builder.addCase(editFontSize.fulfilled, (state, action) => {
            state.appearance.fontSize = action.payload;
        });
        builder.addCase(editColor.fulfilled, (state, action) => {
            state.appearance.color = action.payload;
        });
        builder.addCase(editBackground.fulfilled, (state, action) => {
            state.appearance.background = action.payload;
        });
        builder.addCase(editVisibility.fulfilled, (state, action) => {
            state.privacy.isVisible = action.payload;
        });
        builder.addCase(getAllLoginHistory.fulfilled, (state, action) => {
            state.privacy.loginHistories = action.payload;
        });
        builder.addCase(getAllBlockUser.fulfilled, (state, action) => {
            state.privacy.blockUsers = action.payload;
        });
    }
})

export const {
    setUser,
    unSetUser,
    setLanguage,
    setFontSize,
    setColor,
    setBackground,
    setTheme,
} = setting.actions;

export default setting.reducer;