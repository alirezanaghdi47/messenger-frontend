import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentPage:{
        type: null,
        data: null
    }
}

export const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        unSetCurrentPage: (state) => {
            state.currentPage = initialState.currentPage
        }
    },
})

export const {
    setCurrentPage,
    unSetCurrentPage
} = account.actions

export default account.reducer