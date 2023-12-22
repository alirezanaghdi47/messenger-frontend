// libraries
import {createApi} from '@reduxjs/toolkit/query/react';

// services
import {addTextMessageService, getAllMessageService} from "services/messageService";

// utils
import {axiosBaseQuery} from "utils/functions";

export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ["allMessage"],
    endpoints: (builder) => ({
        getAllMessage: builder.query({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await getAllMessageService(arg);
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            providesTags: ["allMessage"]
        }),
        addTextMessage: builder.mutation({
            queryFn: async (arg, {signal , dispatch , getState}, extraOptions, baseQuery) => {
                try {
                    const response = await addTextMessageService(arg);
                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
            invalidatesTags: ["allMessage"],
        }),
    }),
})

export const {useGetAllMessageQuery, useAddTextMessageMutation} = messageApi;