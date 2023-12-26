// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import localStorage from "redux-persist/es/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// stores
import authReducer from "stores/slices/authSlice.js";
import appReducer from "stores/slices/appSlice.js";
import chatReducer from "stores/slices/chatSlice.js";
import settingReducer from "stores/slices/settingSlice.js";
import {chatApi} from "stores/apis/chatApi";
import {settingApi} from "stores/apis/settingApi";
import {messageApi} from "stores/apis/messageApi";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    setting: settingReducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
});

const persistConfig = {
    key: 'talkative',
    version: 1,
    storage: localStorage,
    whitelist: ['setting', 'auth'],
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
        .concat(chatApi.middleware)
        .concat(chatApi.middleware)
        .concat(settingApi.middleware)
        .concat(messageApi.middleware)
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
