// libraries
import SimpleBar from "simplebar-react";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Language from "./Language.jsx";
import DateTime from "./DateTime.jsx";
import FontSize from "./FontSize.jsx";
import Color from "./Color.jsx";
import Background from "./Background.jsx";
import Theme from "./Theme.jsx";

const Personalization = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : "100%"
            }}
        >

            <Stack
                direction="column"
                gap={4}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    padding: 4,
                }}
            >

                <Language/>

                <DateTime/>

                <FontSize/>

                <Color/>

                <Background/>

                <Theme/>

            </Stack>

        </SimpleBar>
    )
}

export default Personalization;