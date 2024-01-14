// libraries
import {useState} from "react";
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/login/Header";
import LoginForm from "components/widgets/login/LoginForm";
import VerifyUserForm from "components/widgets/login/VerifyUserForm";

const LoginPage = () => {

    const [session , setSession] = useState(null);

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

            {
                session ? (
                    <VerifyUserForm
                        session={session}
                    />
                ) : (
                    <LoginForm
                        setSession={(data) => setSession(data)}
                    />
                )
            }

        </Stack>
    );
}

export default LoginPage;