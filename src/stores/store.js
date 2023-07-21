// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { encryptTransform } from 'redux-persist-transform-encrypt';

// stores
import accountReducer from "@/stores/slices/account.js";
import otherReducer from "@/stores/slices/other.js";

const reducers = combineReducers({
    account: accountReducer,
    other: otherReducer,
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
