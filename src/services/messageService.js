// libraries
import axios from "axios";

// stores
import {store} from "stores/store";

export const getAllMessageService = async (chatId) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/message/getAllMessage", {
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

export const addTextMessageService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.post(process.env.REACT_APP_API_URL + "/api/message/addTextMessage", {text: data.text}, {
            headers: {
                token,
                chatId: data.chatId
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