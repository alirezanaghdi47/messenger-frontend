// libraries
import {createApi} from '@reduxjs/toolkit/query/react';

// services
import {
    editBackgroundService,
    editColorService,
    editFontSizeService,
    editLanguageService,
    editProfileService,
    editThemeService,
} from "services/userService";

// stores
import {
    setBackground,
    setColor,
    setFontSize,
    setLanguage,
    setProfile,
    setTheme
} from "stores/slices/settingSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

export const settingApi = createApi({
    reducerPath: 'settingApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (builder) => ({
        editProfile: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editProfileService(arg);
                    await dispatch(setProfile(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editLanguage: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editLanguageService(arg);
                    await dispatch(setLanguage(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editColor: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editColorService(arg);
                    await dispatch(setColor(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editBackground: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editBackgroundService(arg);
                    await dispatch(setBackground(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editFontSize: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editFontSizeService(arg);
                    await dispatch(setFontSize(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editTheme: builder.mutation({
            queryFn: async (arg, {dispatch}, extraOptions, baseQuery) => {
                try {
                    const response = await editThemeService(arg);
                    await dispatch(setTheme(response.data));
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
    }),
})

export const {
    useEditProfileMutation,
    useEditLanguageMutation,
    useEditColorMutation,
    useEditBackgroundMutation,
    useEditFontSizeMutation,
    useEditThemeMutation
} = settingApi;