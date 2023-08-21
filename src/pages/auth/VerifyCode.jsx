// libraries
import {Stack , Container} from "@mui/material";

// components
import Header from "../../components/widgets/auth/verify/Header.jsx";
import Form from "../../components/widgets/auth/verify/Form.jsx";

const VerifyCode = () => {

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

                <Header title="typography.verifyCode"/>

                <Form/>

            </Stack>

        </Container>
    )
}

export default VerifyCode;