import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ReduxProvider from "@/helpers/ReduxProvider.jsx";
import I18nProvider from "@/helpers/I18nProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider>
        <I18nProvider>
            <App/>
        </I18nProvider>
    </ReduxProvider>
);
