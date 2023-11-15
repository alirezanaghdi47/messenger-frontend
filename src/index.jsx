// libraries
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx';

// providers
import Redux from "providers/Redux.jsx";
import I18n from "providers/I18n.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>

        <Redux>

            <I18n>

                <App/>

            </I18n>

        </Redux>

    </BrowserRouter>
);
