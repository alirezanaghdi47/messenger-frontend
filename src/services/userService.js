// libraries
import axios from "axios";

// stores
import {store} from "stores/store";

export const editProfileService = async (data) => {
    try {
        const token = await store.getState().auth.token;
        const formData = new FormData();

        formData.append("avatar" , data.avatar);
        formData.append("preview" , data.preview);
        formData.append("userName" , data.userName);
        formData.append("biography" , data.biography);

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editProfile" , formData , {
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

export const editLanguageService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editLanguage" , data , {
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

export const editBackgroundService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editBackground" , data , {
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

export const editColorService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editColor" , data , {
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

export const editFontSizeService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editFontSize" , data , {
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

export const editThemeService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editTheme" , data , {
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

export const editVisibilityService = async (data) => {
    try {
        const token = await store.getState().auth.token;

        const response = await axios.put(process.env.REACT_APP_API_URL + "/api/user/editVisibility" , data , {
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
