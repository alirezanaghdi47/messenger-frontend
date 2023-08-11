// libraries
import {Stack} from "@mui/material";

// components
import Color from "@/components/widgets/profile/Color.jsx";
import Theme from "@/components/widgets/profile/Theme.jsx";
import FontSize from "@/components/widgets/profile/FontSize.jsx";
import Background from "@/components/widgets/profile/Background.jsx";

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

            <FontSize/>

            <Color/>

            <Background/>

            <Theme/>

        </Stack>
    )
}

export default Appearance;

