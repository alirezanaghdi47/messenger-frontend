// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    conversations: [],
    currentConversation: {}
}

export const chat = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
})

export const {} = chat.actions;

export default chat.reducer;