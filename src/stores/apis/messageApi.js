// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {setMessages, setProgressQueueMessage} from "stores/slices/chatSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

let abortController = new AbortController();

export const cancelRequest = () => {
    abortController.abort();
    abortController = new AbortController();
}

export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (builder) => ({
        getAllMessage: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/message/getAllMessage", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setMessages(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addTextMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addTextMessage", {text: arg.text}, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addFileMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();
                    formData.append("file", arg.file);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addFileMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            dispatch(setProgressQueueMessage(parseInt((progressEvent.progress * 100).toFixed(2))));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        },
                        signal: abortController.signal
                    });

                    return {data: response.data.data};
                } catch (error) {
                    console.log(error);
                    return {error}
                }
            },
        }),
        addImageMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();
                    formData.append("image", arg.image);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addImageMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            dispatch(setProgressQueueMessage(parseInt((progressEvent.progress * 100).toFixed(2))));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        },
                        signal: abortController.signal
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addMusicMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();
                    formData.append("music", arg.music);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addMusicMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            dispatch(setProgressQueueMessage(parseInt((progressEvent.progress * 100).toFixed(2))));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        },
                        signal: abortController.signal
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addVideoMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();
                    formData.append("video", arg.video);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addVideoMessage", formData, {
                        onUploadProgress: (progressEvent) => {
                            dispatch(setProgressQueueMessage(parseInt((progressEvent.progress * 100).toFixed(2))));
                        },
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        },
                        signal: abortController.signal
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        deleteMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/message/deleteMessage", {
                        headers: {
                            token: await getState().auth.token,
                            messageId: arg,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
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