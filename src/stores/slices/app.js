// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    modal: {
        isOpen: false,
        type: null,
        data: null,
    },
    popup: {
        isOpen: false,
        type: null,
        data: null,
    }
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.modal.isOpen = true;
            state.modal.type = action.payload?.type || null;
            state.modal.data = action.payload?.data || null;
        },
        hideModal: (state, action) => {
            state.modal.isOpen = false;
            state.modal.type = null
            state.modal.data = null;
        },
        showPopup: (state, action) => {
            state.popup.isOpen = true;
            state.popup.type = action.payload?.type || null;
            state.popup.data = action.payload?.data || null;
        },
        hidePopup: (state, action) => {
            state.popup.isOpen = false;
            state.popup.type = null
            state.popup.data = null;
        },
    },
})

export const {
    showModal,
    hideModal,
    showPopup,
    hidePopup
} = app.actions;

export default app.reducer;