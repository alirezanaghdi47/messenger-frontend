// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    chats: [],
    filteredChats: [],
    activeChat: {},
    onlineUsers: [],
    isTypingUsers: [],
    users: [],
    filteredUsers: [],
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
        insertChat: (state, action) => {
            state.chats.push(action.payload);
        },
        removeChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat._id !== action.payload);
        },
        unSetChats: (state) => {
            state.chats = [];
        },
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        unSetActiveChat: (state) => {
            state.activeChat = {};
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        unSetUsers: (state) => {
            state.users = [];
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        unSetOnlineUsers: (state) => {
            state.onlineUsers = [];
        },
        setIsTypingUsers: (state, action) => {
            state.isTypingUsers = action.payload;
        },
        unSetIsTypingUsers: (state) => {
            state.isTypingUsers = [];
        },
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        unSetGroups: (state) => {
            state.groups = [];
        },
        joinGroupChat: (state, action) => {
            state.chats = [...state.chats.filter(chat => chat._id !== action.payload._id), action.payload];
            if (state.activeChat?._id === action.payload._id) {
                state.activeChat = action.payload;
            }
        },
        leaveGroupChat: (state, action) => {
            state.chats = [...state.chats.filter(chat => chat._id !== action.payload._id), action.payload];
            if (state.activeChat?._id === action.payload._id) {
                state.activeChat = action.payload;
            }
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        insertMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        removeMessage: (state, action) => {
            state.messages = state.messages.filter(message => message._id !== action.payload);
        },
        unSetMessages: (state) => {
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
        },
        setFilteredChats: (state, action) => {
            state.filteredChats = action.payload;
        },
        unSetFilteredChats: (state) => {
            state.filteredChats = [];
        },
        setFilteredUsers: (state, action) => {
            state.filteredUsers = action.payload;
        },
        unSetFilteredUsers: (state) => {
            state.filteredUsers = [];
        },
    },
})

export const {
    setChats,
    insertChat,
    removeChat,
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
    joinGroupChat,
    leaveGroupChat,
    setMessages,
    insertMessage,
    removeMessage,
    unSetMessages,
    setQueueMessage,
    setProgressQueueMessage,
    unSetQueueMessage,
    setFilteredChats,
    unSetFilteredChats,
    setFilteredUsers,
    unSetFilteredUsers,
} = chatSlice.actions;

export default chatSlice.reducer;