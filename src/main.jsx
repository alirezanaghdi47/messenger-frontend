// libraries
import {StrictMode} from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// components
import Redux from "@/components/providers/Redux.jsx";
import I18n from "@/components/providers/I18n.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Redux>
            <I18n/>
            <App/>
        </Redux>
    </StrictMode>
);
