// libraries
import {createApi} from '@reduxjs/toolkit/query/react';

// services
import {addChatService, getAllChatService, getChatService , deleteChatService} from "services/chatService";
import {getAllUserService} from "services/userService";

// utils
import {axiosBaseQuery} from "utils/functions";

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ["allUser" , "allChat" , "chat"],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            queryFn: async () => {
                try {
                    const response = await getAllUserService();
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["allUser"]
        }),
        getAllChat: builder.query({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await getAllChatService();
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["allChat"]
        }),
        getChat: builder.query({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await getChatService(arg);
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["chat"]
        }),
        addChat: builder.mutation({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await addChatService(arg);
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["chat"],
        }),
        deleteChat: builder.mutation({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await deleteChatService(arg);
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allChat"],
        }),
    }),
})

export const {useGetAllUserQuery, useGetAllChatQuery, useGetChatQuery, useAddChatMutation , useDeleteChatMutation} = chatApi;