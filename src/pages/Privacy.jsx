// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Secondary from "layouts/Secondary";
import Header from "components/widgets/setting/Header.jsx";
import Security from "components/widgets/privacy/Security";

const Privacy = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Secondary>

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

                <Header title="typography.privacy"/>

                <Security/>

            </Stack>

        </Secondary>
    )
}

export default Privacy;