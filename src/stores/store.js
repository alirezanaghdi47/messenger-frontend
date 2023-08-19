// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { createFilter } from "redux-persist-transform-filter";

// stores
import chatReducer from "./slices/chat.js";
import settingReducer from "./slices/setting.js";

const reducers = combineReducers({
    chat: chatReducer,
    setting: settingReducer,
});

const settingSubsetFilter = createFilter("setting", ["profile" , "appearance"]);

const persistConfig = {
    key: 'messenger',
    version: 1,
    storage: storageSession,
    whitelist: ['setting'],
    stateReconciler: autoMergeLevel2,
    transforms: [
        settingSubsetFilter,
        encryptTransform({
            secretKey: process.env.REACT_APP_REDUX_PERSIST_SECRET_KEY
        })
    ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
});

export const persistor = persistStore(store);
