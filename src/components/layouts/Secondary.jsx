// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

const Secondary = ({children}) => {

    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction={isMobile ? "column" : "row"}
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

        </Container>
    )
}

export default Secondary;

