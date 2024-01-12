// libraries
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';

// providers
import Redux from "providers/Redux.jsx";
import I18n from "providers/I18n.jsx";
import Socket from "./providers/Socket";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <Redux>

            <I18n>

                <Socket>

                    <App/>

                </Socket>

            </I18n>

        </Redux>

    </BrowserRouter>
);
