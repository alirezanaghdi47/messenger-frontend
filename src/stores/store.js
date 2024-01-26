// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import localStorage from "redux-persist/es/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// stores
import authReducer from "stores/slices/authSlice.js";
import sessionReducer from "stores/slices/sessionSlice.js";
import appReducer from "stores/slices/appSlice.js";
import chatReducer from "stores/slices/chatSlice.js";
import settingReducer from "stores/slices/settingSlice.js";
import {authApi} from "stores/apis/authApi";
import {userApi} from "stores/apis/userApi";
import {chatApi} from "stores/apis/chatApi";
import {messageApi} from "stores/apis/messageApi";
import {settingApi} from "stores/apis/settingApi";

const reducers = combineReducers({
    auth: authReducer,
    session: sessionReducer,
    app: appReducer,
    chat: chatReducer,
    setting: settingReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
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
        .concat(authApi.middleware)
        .concat(userApi.middleware)
        .concat(chatApi.middleware)
        .concat(messageApi.middleware)
        .concat(settingApi.middleware)
});

export const persistor = persistStore(store);
