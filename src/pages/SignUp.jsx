// libraries
import {motion} from "framer-motion";
import {Stack , Container} from "@mui/material";

// components
import Header from "components/widgets/auth/Header.jsx";
import SignUpForm from "components/widgets/signUp/SignUpForm.jsx";

// utils
import {slideInRightVariants} from "utils/constants";

const SignUp = () => {

    return (
        <Container
            component={motion.div}
            variants={slideInRightVariants}
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

                <Header title="typography.signUp"/>

                <SignUpForm/>

            </Stack>

        </Container>
    )
}

export default SignUp;