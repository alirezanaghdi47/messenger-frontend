// libraries
import {useLocation} from "react-router-dom";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Header from "../../components/widgets/setting/appearance/Header.jsx";
import Personalization from "../../components/widgets/setting/appearance/Personalization.jsx";

const Appearance = () => {

    const location = useLocation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return location.pathname === "/setting/appearance" && (
        <Stack
            component="main"
            direction="column"
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                bottom: 0,
                left: isTablet ? 0 : 360,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
            }}
        >

            <Header title="typography.appearance"/>

            <Personalization/>

        </Stack>
    )
}

export default Appearance;

