// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {setMessages, setProgressQueueMessage, setQueueMessage, unSetQueueMessage} from "stores/slices/chatSlice";

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
    tagTypes: ["allMessage"],
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
            providesTags: ["allMessage"]
        }),
        addTextMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;
                    const messages = await getState().chat.messages;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addTextMessage", {text: arg.text}, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setMessages([...messages, response.data.data]));

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
                    const {_id, avatar} = await getState().setting.profile;
                    const messages = await getState().chat.messages;

                    const formData = new FormData();
                    formData.append("file", arg.file);

                    await dispatch(setQueueMessage({
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.file.name,
                        size: arg.file.size,
                        progress: 0,
                        userId: {_id, avatar}
                    }));
                    await dispatch(setMessages([...messages, {
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.file.name,
                        size: arg.file.size,
                        userId: {_id, avatar}
                    }]));

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

                    await dispatch(unSetQueueMessage());
                    await dispatch(setMessages([...messages, response.data.data]));

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
                    const {_id, avatar} = await getState().setting.profile;
                    const messages = await getState().chat.messages;

                    const formData = new FormData();
                    formData.append("image", arg.image);

                    await dispatch(setQueueMessage({
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.image.name,
                        size: arg.image.size,
                        progress: 0,
                        userId: {_id, avatar}
                    }));
                    await dispatch(setMessages([...messages, {
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.image.name,
                        size: arg.image.size,
                        userId: {_id, avatar}
                    }]));

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

                    await dispatch(unSetQueueMessage());
                    await dispatch(setMessages([...messages, response.data.data]));

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
                    const {_id, avatar} = await getState().setting.profile;
                    const messages = await getState().chat.messages;

                    const formData = new FormData();
                    formData.append("music", arg.music);

                    await dispatch(setQueueMessage({
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.music.name,
                        size: arg.music.size,
                        progress: 0,
                        userId: {_id, avatar}
                    }));
                    await dispatch(setMessages([...messages, {
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.music.name,
                        size: arg.music.size,
                        userId: {_id, avatar}
                    }]));

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

                    await dispatch(unSetQueueMessage());
                    await dispatch(setMessages([...messages, response.data.data]));

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
                    const {_id, avatar} = await getState().setting.profile;
                    const messages = await getState().chat.messages;

                    const formData = new FormData();
                    formData.append("video", arg.video);

                    await dispatch(setQueueMessage({
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.video.name,
                        size: arg.video.size,
                        progress: 0,
                        userId: {_id, avatar}
                    }));
                    await dispatch(setMessages([...messages, {
                        _id: `${arg.chatId}-${arg.userId}`,
                        type: 6,
                        name: arg.video.name,
                        size: arg.video.size,
                        userId: {_id, avatar}
                    }]));

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

                    await dispatch(unSetQueueMessage());
                    await dispatch(setMessages([...messages, response.data.data]));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addLocationMessage: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;
                    const messages = await getState().chat.messages;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addLocationMessage", {location: arg.location}, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg.chatId,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setMessages([...messages, response.data.data]));

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
                    const messages = await getState().chat.messages;

                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/message/deleteMessage", {
                        headers: {
                            token: await getState().auth.token,
                            messageId: arg,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setMessages(messages.filter(message => message._id !== response.data.data._id)));

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