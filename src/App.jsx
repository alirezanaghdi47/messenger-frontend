// components
import Mui from "components/providers/Mui.jsx";
import Router from "components/providers/Router.jsx";

// styles
import "styles/global.scss";
import 'simplebar-react/dist/simplebar.min.css';
import "vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css";
import "vazirmatn/Vazirmatn-font-face.css";

const App = () => {

    return (
        <Mui>

            <Router/>

        </Mui>
    )
};

export default App;
