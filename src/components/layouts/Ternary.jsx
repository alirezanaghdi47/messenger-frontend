// libraries
import {Container, Stack} from "@mui/material";

const Ternary = ({children}) => {

    return (
        <Container maxWidth="sm">

            <Stack
                direction="column"
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

export default Ternary;

