// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// utils
import {axiosBaseQuery} from "utils/functions";

export const authApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/register", arg , {
                        headers:{
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        login: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/login", arg , {
                        headers:{
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
        verifyUser: builder.mutation({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/verifyUser", {code: arg.code}, {
                        headers: {
                            expire: arg.expire,
                            userId: arg.userId,
                            "Accept-Language": language,
                        }
                    });

                    return {data: response.data};
                } catch (error) {
                    return {error}
                }
            },
        }),
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyUserMutation,
} = authApi;