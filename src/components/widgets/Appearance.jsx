// libraries
import {Stack} from "@mui/material";

// components
import Color from "@/components/widgets/Color.jsx";
import Theme from "@/components/widgets/Theme.jsx";
import FontSize from "@/components/widgets/FontSize.jsx";
import Background from "@/components/widgets/Background.jsx";
import Language from "@/components/widgets/Language.jsx";
import DateTime from "@/components/widgets/DateTime.jsx";

const Appearance = () => {

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                padding: 4,
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

export default Appearance;

