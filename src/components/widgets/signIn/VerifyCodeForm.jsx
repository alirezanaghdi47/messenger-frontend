// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Stack} from "@mui/material";

// components
import NumberInput from "components/modules/NumberInput.jsx";
import Timer from "components/widgets/signIn/Timer";

const VerifyCodeForm = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            code: "",
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <NumberInput
                name="code"
                label={t("input.verifyCode")}
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.errors.code}
            />

            <Timer/>

            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                {t("button.verifyCode")}
            </Button>

        </Stack>
    )
}

export default VerifyCodeForm;