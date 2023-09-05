// libraries
import {Container, Stack} from "@mui/material";

const Primary = ({children}) => {

    return (
        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction="column"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
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

export default Primary;

