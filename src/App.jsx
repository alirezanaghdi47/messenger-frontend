// components
import Mui from "@/components/providers/Mui.jsx";
import Router from "@/components/providers/Router.jsx";
import PreventContextMenu from "@/components/helpers/PreventContextMenu.jsx";

// styles
import "@/styles/global.scss";

const App = () => {

    return (
        <Mui>

            <Router/>

            <PreventContextMenu/>

        </Mui>
    )
};

export default App;
