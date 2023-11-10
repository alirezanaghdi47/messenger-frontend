// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    page: {
        active: "chats",
        data: null,
    }
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page.active = action.payload.active;
            state.page.data = action.payload.data || null;
        },
    },
})

export const {
    setPage,
} = app.actions;

export default app.reducer;