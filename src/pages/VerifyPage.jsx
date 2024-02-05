// libraries
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Stack} from "@mui/material";

// components
import Header from "components/widgets/verify/Header";
import Form from "components/widgets/verify/Form";

const VerifyPage = () => {

    const {userId, expire} = useSelector(state => state.session);

    if (userId && Math.floor(Date.now() / 1000) < expire) {
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
    } else {
        return <Navigate to="/auth/login"/>;
    }

}

export default VerifyPage;