// libraries
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {Button, Stack, Typography} from "@mui/material";
import {FiUserPlus} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput";

// stores
import {useRegisterMutation} from "stores/apis/authApi";

// utils
import {registerSchema} from "utils/validations";

const RegisterForm = () => {

    const navigate = useNavigate();
    const [register , registerResponse] = useRegisterMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            userName: "",
            phoneNumber: "",
        },
        validationSchema: registerSchema,
        onSubmit: async (result) => {
            register(result);
        }
    });

    useEffect(() => {
        if (registerResponse.isSuccess){
            if (registerResponse.data.status === "success"){
                toast.success(registerResponse.data.message);
                navigate("/auth/login");
            } else {
                toast.error(registerResponse.data.message);
            }
        }
    }, [registerResponse]);

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
                padding: 2,
            }}
        >

            <TextInput
                label={t("input.userName")}
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("userName")}
                error={formik.errors.userName}
                touched={formik.touched.userName}
            />

            <TextInput
                label={t("input.phoneNumber")}
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("phoneNumber")}
                error={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
            />

            <Button
                variant="contained"
                color="primary"
                startIcon={<FiUserPlus size={20}/>}
                fullWidth
                onClick={formik.handleSubmit}
            >
                {t("button.signUp")}
            </Button>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Typography
                    variant="body2"
                    color="textPrimary"
                >
                    {t("typography.haveAccount")}
                </Typography>

                <Typography
                    component={Link}
                    to="/auth/login"
                    variant="body2"
                    color="primary.main"
                    fontWeight="bold"
                    sx={{textDecoration: "none"}}
                >
                    {t("typography.login")}
                </Typography>

            </Stack>

        </Stack>
    )
}

export default RegisterForm;