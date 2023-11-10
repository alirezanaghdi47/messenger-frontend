// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from "redux-persist/es/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// stores
import appReducer from "stores/slices/app.js";
import chatReducer from "stores/slices/chat.js";
import settingReducer from "stores/slices/setting.js";

const reducers = combineReducers({
    app: appReducer,
    chat: chatReducer,
    setting: settingReducer,
});


const persistConfig = {
    key: 'messenger',
    version: 1,
    storage: localStorage,
    whitelist: ['setting'],
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: []
});

export const persistor = persistStore(store);
