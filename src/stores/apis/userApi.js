// libraries
import {createApi} from '@reduxjs/toolkit/query/react';
import axios from "axios";

// stores
import {setUsers} from "stores/slices/chatSlice";

// utils
import {axiosBaseQuery} from "utils/functions";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
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
        }),
        getAllRemainingUser: builder.query({
            queryFn: async (arg, {signal, dispatch, getState}, extraOptions, baseQuery) => {
                try {
                    const {language} = await getState().setting.appearance;

                    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/user/getAllRemainingUser", {
                        headers: {
                            token: await getState().auth.token,
                            filteredUserIds: JSON.stringify(arg),
                            "Accept-Language": language,
                        }
                    });

                    await dispatch(setUsers(response.data.data));

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
    useGetAllRemainingUserQuery,
} = userApi;