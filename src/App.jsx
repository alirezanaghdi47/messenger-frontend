// components
import InstallPWA from "components/partials/InstallPwa";
import PreventOrientation from "components/partials/PreventOrientation";
import UpdatePwa from "components/partials/UpdatePwa";
import Toaster from "components/modules/Toaster";

// providers
import MuiProvider from "providers/MuiProvider.jsx";
import RouterProvider from "providers/RouterProvider.jsx";

// styles
import "styles/global.scss";
import "styles/vazirmatn.css";

const App = () => {

    return (
        <MuiProvider>

            <RouterProvider/>

            <Toaster/>

            <InstallPWA/>

            <UpdatePwa/>

            <PreventOrientation/>

        </MuiProvider>
    )
};

export default App;
