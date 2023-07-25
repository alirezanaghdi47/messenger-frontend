import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeChat: {
        _id: null,
        name: null,
        avatar: null,
        biography: null,
        users: [],
        lastMessageDate: null,
        isGroup: false,
    }
}

export const chat = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChat._id = action.payload._id;
        },
        removeActiveChat: (state) => {
            state.activeChat = initialState.activeChat
        }
    },
})

export const {
    setActiveChat,
    removeActiveChat
} = chat.actions;

export default chat.reducer;