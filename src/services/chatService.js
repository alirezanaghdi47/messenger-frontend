// libraries
import axios from "axios";

// stores
import {store} from "stores/store";

export const getAllChatService = async () => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getAllChat", {
            headers: {token}
        });

        return response.data;
    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const getChatService = async (chatId) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/chat/getChat", {
            headers: {
                token, chatId
            }
        });

        return response.data;
    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const addChatService = async (receiverId) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.post(process.env.REACT_APP_API_URL + "/api/chat/addChat", null, {
            headers: {
                token, receiverId
            }
        });

        return response.data;
    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}

export const deleteChatService = async (chatId) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.delete(process.env.REACT_APP_API_URL + "/api/chat/deleteChat", {
            headers: {
                token, chatId
            }
        });

        return response.data;
    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}