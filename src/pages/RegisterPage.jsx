// libraries
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/register/Header";
import Action from "components/widgets/register/Action";
import RegisterForm from "components/widgets/register/RegisterForm";

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

            <RegisterForm/>

            <Action/>

        </Stack>
    );
}

export default RegisterPage;