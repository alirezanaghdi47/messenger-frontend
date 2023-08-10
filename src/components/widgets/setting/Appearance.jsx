// libraries
import {Stack} from "@mui/material";

// components
import Language from "@/components/widgets/setting/Language.jsx";
import Color from "@/components/widgets/setting/Color.jsx";
import Theme from "@/components/widgets/setting/Theme.jsx";
import FontSize from "@/components/widgets/setting/FontSize.jsx";
import Background from "@/components/widgets/setting/Background.jsx";

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

            <FontSize/>

            <Color/>

            <Background/>

            <Theme/>

        </Stack>
    )
}

export default Appearance;

