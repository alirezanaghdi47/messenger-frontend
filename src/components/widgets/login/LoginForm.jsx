// libraries
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {Button, Stack} from "@mui/material";
import {FiLogIn} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput";

// stores
import {useLoginMutation} from "stores/apis/authApi";

// utils
import {loginSchema} from "utils/validations";

const LoginForm = ({setSession}) => {

    const [login , loginResponse] = useLoginMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (result) => {
            login(result);
        }
    });

    useEffect(() => {
        if (loginResponse.isSuccess){
            if (loginResponse.data.status === "success"){
                toast.success(loginResponse.data.message);
                setSession(loginResponse.data.data);
            } else {
                toast.error(loginResponse.data.message);
            }
        }
    }, [loginResponse]);

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
                label={t("input.phoneNumber")}
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("phoneNumber")}
                error={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
            />

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FiLogIn size={20}/>}
                    fullWidth
                    onClick={formik.handleSubmit}
                >
                    {t("button.login")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default LoginForm;