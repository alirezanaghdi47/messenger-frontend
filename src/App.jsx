// libraries
import {useSelector} from "react-redux";
import {useTheme} from "@mui/material";
import {Toaster} from "react-hot-toast";

// providers
import Mui from "providers/Mui.jsx";
import Router from "providers/Router.jsx";

// styles
import "styles/global.scss";

const App = () => {

    const theme = useTheme();
    const {language, darkMode} = useSelector(state => state.setting.appearance);

    return (
        <Mui>

            <Toaster
                position="top-center"
                containerStyle={{
                    fontSize: theme.typography.body2.fontSize,
                    fontWeight: "bold",
                    fontFamily: language === "fa" ? "Vazir FD" : "Vazirmatn"
                }}
                toastOptions={{
                    duration: 1500,
                    style: {
                        background: darkMode ? theme.palette.common.white : theme.palette.common.black,
                        color: darkMode ? theme.palette.common.black : theme.palette.common.white
                    }
                }}
            />

            <Router/>

        </Mui>
    )
};

export default App;
