// libraries
import {Stack} from "@mui/material";

// components
import Language from "./Language.jsx";
import DateTime from "./DateTime.jsx";
import FontSize from "./FontSize.jsx";
import Color from "./Color.jsx";
import Background from "./Background.jsx";
import Theme from "./Theme.jsx";

const Personalization = () => {

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                padding: 2,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            <Language/>

            <DateTime/>

            <FontSize/>

            <Color/>

            <Background/>

            <Theme/>

        </Stack>
    )
}

export default Personalization;