// libraries
import {Stack , Container} from "@mui/material";

// components
import Header from "../../components/widgets/auth/signUp/Header.jsx";
import Form from "../../components/widgets/auth/signUp/Form.jsx";

const SignUp = () => {

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

                <Header title="typography.signUp"/>

                <Form/>

            </Stack>

        </Container>
    )
}

export default SignUp;