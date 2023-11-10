// libraries
import {Stack, Container} from "@mui/material";

// components
import Ternary from "layouts/Ternary";
import Header from "components/widgets/auth/Header.jsx";
import SignInForm from "components/widgets/signIn/SignInForm.jsx";
import VerifyCodeForm from "components/widgets/signIn/VerifyCodeForm";

const SignIn = () => {

    return (
        <Ternary>

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

        </Ternary>
    )
}

export default SignIn;