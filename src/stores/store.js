import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import thunk from "redux-thunk";

import accountReducer from "@/stores/slices/account.js";

const reducers = combineReducers({
    account: accountReducer,
});

const persistConfig = {
    key: 'messenger',
    version: 1,
    storage: storageSession,
    whitelist: ['account'],
    stateReconciler: autoMergeLevel2,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_REDUX_PERSIST_SECRET_KEY
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
