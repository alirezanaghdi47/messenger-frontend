// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeSetting: null,
}

export const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setActiveSetting: (state, action) => {
            state.activeSetting = action.payload;
        },
        removeActiveSetting: (state) => {
            state.activeSetting = initialState.activeSetting
        },
    },
})

export const {
    setActiveSetting,
    removeActiveSetting,
} = setting.actions;

export default setting.reducer;