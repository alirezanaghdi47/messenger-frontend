// components
import Mui from "./components/providers/Mui.jsx";
import Router from "./components/providers/Router.jsx";
import ContextMenu from "./components/helpers/ContextMenu.jsx";

// styles
import "./styles/global.scss";
import 'simplebar-react/dist/simplebar.min.css';

const App = () => {

    return (
        <Mui>

            <Router/>

            <ContextMenu/>

        </Mui>
    )
};

export default App;
