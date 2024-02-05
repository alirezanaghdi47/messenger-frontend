// libraries
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/register/Header";
import Form from "components/widgets/register/Form";

const RegisterPage = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: 480
            }}
        >

            <Header/>

            <Form/>

        </Stack>
    );
}

export default RegisterPage;