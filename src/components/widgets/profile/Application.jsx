// libraries
import {Stack} from "@mui/material";

// components
import Language from "@/components/widgets/profile/Language.jsx";
import DateTime from "@/components/widgets/profile/DateTime.jsx";
import Keyboard from "@/components/widgets/profile/Keyboard.jsx";

const Application = () => {

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

            <Keyboard/>

        </Stack>
    )
}

export default Application;

