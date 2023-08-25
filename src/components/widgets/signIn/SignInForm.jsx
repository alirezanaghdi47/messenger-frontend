// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack, Typography} from "@mui/material";
import {FiKey, FiUser} from "react-icons/fi";

// components
import TextInput from "../../modules/TextInput.jsx";

const SignInForm = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <TextInput
                name="userName"
                placeholder={t("input.userName")}
                startIcon={<FiUser size={20}/>}
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={formik.errors.userName}
            />

            <TextInput
                name="password"
                placeholder={t("input.password")}
                startIcon={<FiKey size={20}/>}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                {t("button.signIn")}
            </Button>

            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="bold"
                    sx={{marginRight: 1}}
                >
                    {t("typography.signUpQuestion")}
                </Typography>

                <Button
                    component={Link}
                    variant="text"
                    color="primary"
                    to="/auth/sign-up"
                >
                    {t("button.signUp")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default SignInForm;