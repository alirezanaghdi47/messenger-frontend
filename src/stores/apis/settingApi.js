// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {
    setBackground,
    setColor,
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
            queryFn: async (arg, {dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;
                    const formData = new FormData();

                    formData.append("avatar", arg.avatar);
                    formData.append("preview", arg.preview);
                    formData.append("biography", arg.biography);

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editProfile", formData, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setProfile(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editLanguage: builder.mutation({
            queryFn: async (arg, {dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editLanguage", arg, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setLanguage(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editColor: builder.mutation({
            queryFn: async (arg, {dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editColor", arg, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setColor(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editBackground: builder.mutation({
            queryFn: async (arg, {dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editBackground", arg, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setBackground(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        editTheme: builder.mutation({
            queryFn: async (arg, {dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editTheme", arg, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setTheme(response.data.data));

                    return {data: response.data.data};
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
    useEditThemeMutation
} = settingApi;