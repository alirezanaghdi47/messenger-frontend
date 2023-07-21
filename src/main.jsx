// libraries
import {StrictMode} from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// helpers
import ReduxProvider from "@/helpers/ReduxProvider.jsx";
import I18nProvider from "@/helpers/I18nProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ReduxProvider>
            <I18nProvider/>
            <App/>
        </ReduxProvider>
    </StrictMode>
);
