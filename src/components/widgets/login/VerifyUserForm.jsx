// libraries
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {jwtDecode} from "jwt-decode";
import {Button, Stack} from "@mui/material";
import {FiCheck, FiRotateCw} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput";

// stores
import {useVerifyUserMutation} from "stores/apis/authApi";
import {signIn} from "stores/slices/authSlice";
import {setUser} from "stores/slices/settingSlice";

// utils
import {verifyUserSchema} from "utils/validations";

const VerifyUserForm = ({session}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [verifyUser, verifyUserResponse] = useVerifyUserMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: verifyUserSchema,
        onSubmit: async (result) => {
            verifyUser({...result, ...session});
        }
    });

    useEffect(() => {

        if (verifyUserResponse.isSuccess) {
            if (verifyUserResponse.data.status === "success") {
                dispatch(signIn({
                    token: verifyUserResponse.data.data,
                    expire: jwtDecode(verifyUserResponse.data.data)?.exp
                }));
                dispatch(setUser(jwtDecode(verifyUserResponse.data.data)));
                toast.success(verifyUserResponse.data.message);
                navigate("/chat");
            } else {
                toast.error(verifyUserResponse.data.message);
            }
        }
    }, [verifyUserResponse]);

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
                label={t("input.code")}
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("code")}
                error={formik.errors.code}
                touched={formik.touched.code}
            />

            <Button
                variant="contained"
                color="primary"
                startIcon={<FiCheck size={20}/>}
                fullWidth
                onClick={formik.handleSubmit}
            >
                {t("button.verify")}
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

                <Button
                    variant="text"
                    color="ternary"
                    startIcon={<FiRotateCw size={20}/>}
                    onClick={() => navigate(0)}
                >
                    {t("button.reSendCode")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default VerifyUserForm;