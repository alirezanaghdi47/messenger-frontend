// libraries
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import localStorage from "redux-persist/es/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import createFilter, {createBlacklistFilter} from 'redux-persist-transform-filter';

// stores
import authReducer from "stores/slices/auth.js";
import appReducer from "stores/slices/app.js";
import chatReducer from "stores/slices/chat.js";
import settingReducer from "stores/slices/setting.js";

// const settingWhiteListFilter = createBlacklistFilter('setting', ['privacy.loginHistories' , 'privacy.blockUsers']);

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    setting: settingReducer,
});

const persistConfig = {
    key: 'talkative',
    version: 1,
    storage: localStorage,
    whitelist: ['setting', 'auth'],
    stateReconciler: autoMergeLevel2,
    // transforms: [settingWhiteListFilter]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store);
