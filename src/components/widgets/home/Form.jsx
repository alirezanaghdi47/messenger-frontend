// libraries
import {useTranslation} from "react-i18next";
import {Button, Stack, Typography} from "@mui/material";
import {FaGoogle, FaLinkedinIn} from "react-icons/fa6";

const Form = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Typography
                variant="h6"
                color="textPrimary"
                fontWeight='bold'
            >
                {t("typography.signIn")}
            </Typography>

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaGoogle size={20}/>}
                    fullWidth
                >
                    {t("button.google")}
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaLinkedinIn size={20}/>}
                    fullWidth
                >
                    {t("button.linkedin")}
                </Button>

            </Stack>

        </Stack>
    )
}

export default Form;