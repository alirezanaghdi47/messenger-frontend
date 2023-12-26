// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {setMessages} from "stores/slices/chatSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

const addFileController = new AbortController();
const addImageController = new AbortController();
const addMusicController = new AbortController();
const addVideoController = new AbortController();

export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ["allMessage"],
    endpoints: (builder) => ({
        getAllMessage: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/message/getAllMessage", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg
                        }
                    });

                    await dispatch(setMessages(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["allMessage"]
        }),
        addTextMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addTextMessage", {text: arg.text}, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        addFileMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const formData = new FormData();
                    formData.append("file", arg.file);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addFileMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            console.log((progressEvent.progress * 100).toFixed(2));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        },
                        signal: addFileController.signal
                    });

                    // ???? redux

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        addImageMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const formData = new FormData();
                    formData.append("image", arg.image);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addImageMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            console.log((progressEvent.progress * 100).toFixed(2));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        },
                        signal: addImageController.signal
                    });

                    // ???? redux

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        addMusicMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const formData = new FormData();
                    formData.append("music", arg.music);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addMusicMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            console.log((progressEvent.progress * 100).toFixed(2));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        },
                        signal: addMusicController.signal
                    });

                    // ???? redux

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        addVideoMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const formData = new FormData();
                    formData.append("video", arg.video);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addVideoMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            console.log((progressEvent.progress * 100).toFixed(2));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        },
                        signal: addVideoController.signal
                    });

                    // ???? redux

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        addLocationMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addLocationMessage", {location: arg.location}, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
        deleteMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/message/deleteMessage", {
                        headers: {
                            token: await getState().auth.token,
                            messageId: arg
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
    }),
});

export const {
    useGetAllMessageQuery,
    useAddTextMessageMutation,
    useAddFileMessageMutation,
    useAddImageMessageMutation,
    useAddMusicMessageMutation,
    useAddVideoMessageMutation,
    useAddLocationMessageMutation,
    useDeleteMessageMutation
} = messageApi;