// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack, Typography} from "@mui/material";
import {FiKey, FiPhone, FiUser} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput.jsx";
import PasswordInput from "components/modules/PasswordInput.jsx";

// utils
import {signUpSchema} from "utils/validations";

const SignUpForm = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            userName: "",
            phoneNumber: "",
            password: "",
            passwordRepeat: "",
        },
        validationSchema: signUpSchema,
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
                touched={formik.touched.userName}
            />

            <TextInput
                name="phoneNumber"
                placeholder={t("input.phoneNumber")}
                startIcon={<FiPhone size={20}/>}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
            />

            <PasswordInput
                name="password"
                placeholder={t("input.password")}
                startIcon={<FiKey size={20}/>}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                touched={formik.touched.password}
            />

            <PasswordInput
                name="passwordRepeat"
                placeholder={t("input.passwordRepeat")}
                startIcon={<FiKey size={20}/>}
                value={formik.values.passwordRepeat}
                onChange={formik.handleChange}
                error={formik.errors.passwordRepeat}
                touched={formik.touched.passwordRepeat}
            />

            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={formik.handleSubmit}
            >
                {t("button.signUp")}
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
                    {t("typography.signInQuestion")}
                </Typography>

                <Button
                    component={Link}
                    variant="text"
                    color="primary"
                    to="/auth/sign-in"
                >
                    {t("button.signIn")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default SignUpForm;