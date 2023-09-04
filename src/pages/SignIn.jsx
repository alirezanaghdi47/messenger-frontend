// libraries
import {Stack, Container} from "@mui/material";

// components
import Header from "components/widgets/auth/Header.jsx";
import SignInForm from "components/widgets/signIn/SignInForm.jsx";
import VerifyCodeForm from "components/widgets/signIn/VerifyCodeForm";

const SignIn = () => {

    return (
        <Container
            component="main"
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

                <SignInForm/>

                {/*<VerifyCodeForm/>*/}

            </Stack>

        </Container>
    )
}

export default SignIn;