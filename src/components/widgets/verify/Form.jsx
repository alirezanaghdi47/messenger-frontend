// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Box, Button, Stack} from "@mui/material";

// components
import NumberInput from "../../modules/NumberInput.jsx";
import Timer from "./Timer";

const Form = () => {

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

            <Timer/>

            <NumberInput
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.errors.code}
            />

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

export default Form;