// libraries
import {Container, Stack} from "@mui/material";

const SecondaryLayout = ({children}) => {

    return (

        <Container
            maxWidth="xl"
            disableGutters
        >

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

        </Container>
    )
}

export default SecondaryLayout;

