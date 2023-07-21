import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activePage:{
        type: null,
        data: null
    },
    activeTab: {
        type: null,
        data: null
    },
}

export const other = createSlice({
    name: 'other',
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        removeActivePage: (state) => {
            state.activePage = initialState.activePage
        }
    },
})

export const {
    setActivePage,
    removeActivePage
} = other.actions;

export default other.reducer;