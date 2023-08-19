// libraries
import {Stack} from "@mui/material";

// components
import Header from "../../components/widgets/auth/verify/Header.jsx";
import Form from "../../components/widgets/auth/verify/Form.jsx";
import Timer from "../../components/widgets/auth/verify/Timer.jsx";

const VerifyCode = () => {

    return (
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

            <Timer/>

            <Form/>

        </Stack>
    )
}

export default VerifyCode;