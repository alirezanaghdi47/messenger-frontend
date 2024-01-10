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
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/user/getAllUser", {
                        headers: {
                            token: await getState().auth.token,
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
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getAllChat", {
                        headers: {
                            token: await getState().auth.token,
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
                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getChat", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg
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
                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/chat/addChat", null, {
                        headers: {
                            token: await getState().auth.token,
                            receiverId: arg
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
                    const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/chat/deleteChat", {
                        headers: {
                            token: await getState().auth.token,
                            chatId: arg
                        }
                    });

                    return {data: response.data.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allChat"],
        }),
    }),
})

export const {
    useGetAllUserQuery,
    useGetAllChatQuery,
    useGetChatQuery,
    useAddChatMutation,
    useDeleteChatMutation
} = chatApi;