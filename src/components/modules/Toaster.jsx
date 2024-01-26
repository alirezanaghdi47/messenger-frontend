// libraries
import {useSelector} from "react-redux";
import {Toaster as ReactToaster} from "react-hot-toast";
import {useTheme} from "@mui/material";

const Toaster = ()=> {

    const {language, darkMode} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <ReactToaster
            position="top-center"
            containerStyle={{
                fontSize: theme.typography.body2.fontSize,
                fontWeight: "bold",
                fontFamily: language === "fa" ? "Vazirmatn FD" : "Vazirmatn"
            }}
            toastOptions={{
                duration: 1500,
                style: {
                    background: darkMode ? theme.palette.common.white : theme.palette.common.black,
                    color: darkMode ? theme.palette.common.black : theme.palette.common.white
                }
            }}
        />
    )
}

export default Toaster;