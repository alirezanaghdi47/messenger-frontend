// libraries
import axios from "axios";

// stores
import {store} from "stores/store";

export const getAllBlockUserService = async () => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.get(process.env.REACT_APP_API_URL + "/api/block/getAllBlockUser" , {
            headers:{token}
        });

        return response.data;
    } catch (err) {
        return {
            message: err?.response?.data?.message,
            status: err?.response?.data?.status,
        };
    }
}