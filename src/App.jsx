// helpers
import MuiProvider from "@/helpers/MuiProvider.jsx";
import RouterProvider from "@/helpers/RouterProvider.jsx";

// styles
import "@/styles/global.scss";

const App = () => {
    return (
        <MuiProvider>
           <RouterProvider/>
        </MuiProvider>
    )
};

export default App;
