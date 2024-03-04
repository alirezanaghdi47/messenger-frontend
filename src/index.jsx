// libraries
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// providers
import ReduxProvider from "providers/ReduxProvider.jsx";
import CookieProvider from "providers/CookieProvider";
import I18nProvider from "providers/I18nProvider.jsx";
import SocketProvider from "providers/SocketProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <ReduxProvider>

           <CookieProvider>

               <I18nProvider>

                   <SocketProvider>

                       <App/>

                   </SocketProvider>

               </I18nProvider>

           </CookieProvider>

        </ReduxProvider>

    </BrowserRouter>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

