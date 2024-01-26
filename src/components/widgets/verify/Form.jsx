// libraries
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {jwtDecode} from "jwt-decode";
import {Button, Stack} from "@mui/material";
import {FiCheck, FiRotateCw} from "react-icons/fi";

// components
import TextInput from "components/modules/TextInput";

// stores
import {useVerifyMutation} from "stores/apis/authApi";
import {signIn} from "stores/slices/authSlice";
import {setUser} from "stores/slices/settingSlice";
import {unSetSession} from "stores/slices/sessionSlice";

// utils
import {verifyUserSchema} from "utils/validations";

const Form = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userId , expire} = useSelector(state => state.session);
    const [verify, verifyResponse] = useVerifyMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: verifyUserSchema,
        onSubmit: async (result) => {
            verify({...result, userId , expire});
        }
    });

    useEffect(() => {
        if (verifyResponse.isSuccess) {
            if (verifyResponse.data.status === "success") {
                dispatch(signIn({
                    token: verifyResponse.data.data,
                    expire: jwtDecode(verifyResponse.data.data)?.exp
                }));
                dispatch(setUser(jwtDecode(verifyResponse.data.data)));
                toast.success(verifyResponse.data.message);
                navigate("/chat");
                dispatch(unSetSession());
            } else {
                toast.error(verifyResponse.data.message);
            }
        }
    }, [verifyResponse]);

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
                    onClick={() => navigate("/auth/login")}
                >
                    {t("button.reSendCode")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default Form;