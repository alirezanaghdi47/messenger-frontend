// libraries
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// providers
import Redux from "providers/Redux.jsx";
import Cookie from "providers/Cookie";
import I18n from "providers/I18n.jsx";
import Socket from "providers/Socket";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <Redux>

           <Cookie>

               <I18n>

                   <Socket>

                       <App/>

                   </Socket>

               </I18n>

           </Cookie>

        </Redux>

    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

