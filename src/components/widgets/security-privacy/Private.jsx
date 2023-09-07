// libraries
import SimpleBar from "simplebar-react";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Personal from "components/widgets/security-privacy/Personal";
import Secure from "components/widgets/security-privacy/Secure";

const Private = () => {

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

                <Secure/>

                <Personal/>

            </Stack>

        </SimpleBar>
    )
}

export default Private;