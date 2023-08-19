// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Stack, Typography} from "@mui/material";

const Redirect = () => {

    const {t} = useTranslation();

    return (
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
    )
}

export default Redirect;