// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const Action = () => {

    const {t} = useTranslation();

    return (
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
                {t("typography.createAccount")}
            </Typography>

            <Typography
                component={Link}
                to="/auth/register"
                variant="body2"
                color="primary.main"
                fontWeight="bold"
                sx={{textDecoration: "none"}}
            >
                {t("typography.register")}
            </Typography>

        </Stack>
    )
}

export default Action;