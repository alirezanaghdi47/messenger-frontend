// libraries
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/login/Header";
import Form from "components/widgets/login/Form";

const LoginPage = () => {

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

export default LoginPage;