// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {addChat, setActiveChat, setChats, setUsers} from "stores/slices/chatSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ["allUser", "allChat", "chat"],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/user/getAllUser", {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setUsers(response.data.data));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["allUser"]
        }),
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
            providesTags: ["allChat"]
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
            providesTags: ["chat"]
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

                    if (response.data.data){
                        await dispatch(addChat(response.data.data));
                    }

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        addGroup: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const formData = new FormData();

                    formData.append("avatar", arg.avatar);
                    formData.append("name", arg.name);
                    formData.append("description", arg.description);
                    arg.participantIds.map(participantId => {
                        formData.append("receiverIds[]", participantId);
                    })

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/chat/addGroup", formData, {
                        headers: {
                            token: await getState().auth.token,
                            "Accept-Language": language,
                        }
                    });

                    if (response.data.data){
                        await dispatch(addChat(response.data.data));
                    }

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
                    const chats = await getState().chat.chats;

                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/chat/deleteChat", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg,
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setChats(chats.filter(chat => chat._id !== response.data.data._id)));

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
    }),
})

export const {
    useGetAllUserQuery,
    useGetAllChatQuery,
    useGetChatQuery,
    useAddChatMutation,
    useAddGroupMutation,
    useDeleteChatMutation
} = chatApi;