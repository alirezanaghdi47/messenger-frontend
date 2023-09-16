// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Language from "components/widgets/appearance/Language.jsx";
import FontSize from "components/widgets/appearance/FontSize.jsx";
import Color from "components/widgets/appearance/Color.jsx";
import Background from "components/widgets/appearance/Background.jsx";
import Theme from "components/widgets/appearance/Theme.jsx";

const Customize = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : "max-content",
                padding: 4,
                overflowY:"scroll"
            }}
            className="remove-scrollbar"
        >

            <Language/>

            <FontSize/>

            <Color/>

            <Background/>

            <Theme/>

        </Stack>
    )
}

export default Customize;