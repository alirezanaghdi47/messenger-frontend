// libraries
import {Container, Stack} from "@mui/material";

const Ternary = ({children}) => {

    return (
        <Container maxWidth="sm">

            <Stack
                direction="column"
                gap={4}
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    minHeight: "100dvh",
                    height: "100%",
                }}
            >

                {children}

            </Stack>

        </Container>
    )
}

export default Ternary;

