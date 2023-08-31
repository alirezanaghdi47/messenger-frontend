// libraries
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import {Stack, Container} from "@mui/material";

// components
import Header from "components/widgets/auth/Header.jsx";
import SignInForm from "components/widgets/signIn/SignInForm.jsx";
import VerifyCodeForm from "components/widgets/signIn/VerifyCodeForm";

// utils
import {slideInRightVariants , slideInLeftVariants} from "utils/constants";

const SignIn = () => {

    const {language} = useSelector(state => state.setting.appearance);

    return (
        <Container
            component={motion.div}
            variants={language === "fa" ? slideInRightVariants : slideInLeftVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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