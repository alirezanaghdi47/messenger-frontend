// libraries
import {Stack, Container} from "@mui/material";

// components
import Header from "../../components/widgets/auth/signIn/Header.jsx";
import Form from "../../components/widgets/auth/signIn/Form.jsx";
import Redirect from "../../components/widgets/auth/signIn/Redirect.jsx";

const SignIn = () => {

    return (
        <Container
            maxWidth='xs'
            disableGutters
        >

            <Stack
                direction="column"
                gap={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Header title="typography.signIn"/>

                <Form/>

                <Redirect/>

            </Stack>

        </Container>
    )
}

export default SignIn;