// libraries
import {Stack} from "@mui/material";
import {useOrientation} from "@uidotdev/usehooks";

// components
import Orientation from "components/partials/Orientation";

const Secondary = ({children}) => {

    const {angle, type} = useOrientation();

    const isOriented = angle === 90 && type === "landscape-primary";

    return !isOriented ? (

        <Stack
            direction="row"
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                minHeight: "100dvh",
            }}
        >
            {children}
        </Stack>

    ) : <Orientation/>
}

export default Secondary;

