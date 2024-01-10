// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    chats: [],
    activeChat: {},
    onlineUsers: [],
    isTypingUsers: [],
    users: [],
    groups: [],
    messages: [],
    queueMessage: {},
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        addChat: (state , action) => {
            state.chats.push(action.payload);
        },
        deleteChat: (state , action) => {
            state.chats = state.chats.filter(chat => chat._id !== action.payload);
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
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        unSetOnlineUsers: (state, action) => {
            state.onlineUsers = [];
        },
        setIsTypingUsers: (state, action) => {
            state.isTypingUsers = action.payload;
        },
        unSetIsTypingUsers: (state, action) => {
            state.isTypingUsers = [];
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
        addMessage: (state , action) => {
          state.messages.push(action.payload);
        },
        deleteMessage: (state , action) => {
            state.messages = state.messages.filter(message => message._id !== action.payload);
        },
        unSetMessages: (state, action) => {
            state.messages = [];
        },
        setQueueMessage: (state, action) => {
            state.queueMessage = action.payload;
        },
        unSetQueueMessage: (state) => {
            state.queueMessage = {};
        },
        setProgressQueueMessage: (state, action) => {
            state.queueMessage = {
                ...state.queueMessage,
                progress: action.payload,
            }
        }
    },
})

export const {
    setChats,
    addChat,
    deleteChat,
    unSetChats,
    setActiveChat,
    unSetActiveChat,
    setUsers,
    unSetUsers,
    setOnlineUsers,
    unSetOnlineUsers,
    setIsTypingUsers,
    unSetIsTypingUsers,
    setGroups,
    unSetGroups,
    setMessages,
    addMessage,
    deleteMessage,
    unSetMessages,
    setQueueMessage,
    setProgressQueueMessage,
    unSetQueueMessage
} = chatSlice.actions;

export default chatSlice.reducer;