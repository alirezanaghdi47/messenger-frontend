// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {setActiveChat, setChats} from "stores/slices/chatSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (builder) => ({
        getAllChat: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getAllChat", {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setChats(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        getChat: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getChat", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setActiveChat(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addChat: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/chat/addChat", {receiverId: arg}, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addGroupChat: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();

                    formData.append("avatar", arg.avatar);
                    formData.append("name", arg.name);
                    formData.append("description", arg.description);

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/chat/addGroupChat", formData, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        joinGroupChat: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/chat/joinGroupChat", {receiverIds: arg.receiverIds}, {
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
        leaveGroupChat: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.put(process.env.REACT_APP_API_URL + "/api/chat/leaveGroupChat", null, {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        deleteChat: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/chat/deleteChat", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg,
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
})

export const {
    useGetAllChatQuery,
    useGetChatQuery,
    useAddChatMutation,
    useAddGroupChatMutation,
    useJoinGroupChatMutation,
    useLeaveGroupChatMutation,
    useDeleteChatMutation
} = chatApi;