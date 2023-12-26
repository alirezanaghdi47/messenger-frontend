// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    chats: [],
    activeChat: {},
    users: [],
    groups: [],
    messages: [],
    queueMessages: [],
    forwardMessage: {},
    replyMessage: {},
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        unSetChats: (state, action) => {
            state.chats = [];
        },
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        unSetActiveChat: (state, action) => {
            state.activeChat = {};
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        unSetUsers: (state, action) => {
            state.users = [];
        },
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        unSetGroups: (state, action) => {
            state.groups = [];
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        unSetMessages: (state, action) => {
            state.messages = [];
        },
        setQueueMessages: (state, action) => {
            state.queueMessages = action.payload;
        },
        unSetQueueMessages: (state, action) => {
            state.queueMessages = [];
        },
        addQueueMessage: (state, action) => {
            state.queueMessages.push({
                id: Date.now(),
                name: action.payload.name,
                size: action.payload.size,
            });
        },
        setForwardMessage: (state, action) => {
            state.forwardMessage = action.payload;
        },
        unSetForwardMessage: (state, action) => {
            state.forwardMessage = {};
        },
        setReplyMessage: (state, action) => {
            state.replyMessage = action.payload;
        },
        unSetReplyMessage: (state, action) => {
            state.replyMessage = {};
        },
    },
})

export const {
    setChats,
    unSetChats,
    setActiveChat,
    unSetActiveChat,
    setUsers,
    unSetUsers,
    setGroups,
    unSetGroups,
    setMessages,
    unSetMessages,
    setQueueMessages,
    unSetQueueMessages,
    setForwardMessage,
    unSetForwardMessage,
    setReplyMessage,
    unSetReplyMessage
} = chatSlice.actions;

export default chatSlice.reducer;