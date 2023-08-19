// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Button, Grid, Stack} from "@mui/material";

// components
import NumberInput from "../../../modules/NumberInput.jsx";

const Form = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            code1: "",
            code2: "",
            code3: "",
            code4: "",
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

            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Grid
                    item
                    xs={3}
                >

                    <NumberInput
                        name="code1"
                        value={formik.values.code1}
                        onChange={formik.handleChange}
                        error={formik.errors.code1}
                    />

                </Grid>

                <Grid
                    item
                    xs={3}
                >

                    <NumberInput
                        name="code2"
                        value={formik.values.code2}
                        onChange={formik.handleChange}
                        error={formik.errors.code2}
                    />

                </Grid>

                <Grid
                    item
                    xs={3}
                >

                    <NumberInput
                        name="code3"
                        value={formik.values.code3}
                        onChange={formik.handleChange}
                        error={formik.errors.code3}
                    />

                </Grid>

                <Grid
                    item
                    xs={3}
                >

                    <NumberInput
                        name="code4"
                        value={formik.values.code4}
                        onChange={formik.handleChange}
                        error={formik.errors.code4}
                    />

                </Grid>

            </Grid>

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