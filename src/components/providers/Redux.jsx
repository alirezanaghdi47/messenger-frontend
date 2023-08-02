// libraries
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// stores
import {store, persistor} from "@/stores/store.js";

const Redux = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Redux;
