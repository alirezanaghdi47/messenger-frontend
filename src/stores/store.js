// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { encryptTransform } from 'redux-persist-transform-encrypt';

// stores
import chatReducer from "@/stores/slices/chat.js";
import profileReducer from "@/stores/slices/profile.js";
import voiceCallReducer from "@/stores/slices/voiceCall.js";
import videoCallReducer from "@/stores/slices/videoCall.js";
import contactReducer from "@/stores/slices/contact.js";
import settingReducer from "@/stores/slices/setting.js";

const reducers = combineReducers({
    chat: chatReducer,
    profile: profileReducer,
    voiceCall: voiceCallReducer,
    videoCall: videoCallReducer,
    contact: contactReducer,
    setting: settingReducer,
});

const persistConfig = {
    key: 'messenger',
    version: 1,
    storage: storageSession,
    whitelist: ['profile'],
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
