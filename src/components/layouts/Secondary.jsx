// libraries
import {Stack} from "@mui/material";

const Secondary = ({children}) => {

    return (
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
    )
}

export default Secondary;

