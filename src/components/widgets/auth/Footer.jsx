// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const Footer = () => {

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
                variant="caption"
                color="textSecondary"
            >
                {t("typography.copyRight")}
            </Typography>

        </Stack>
    )
}

export default Footer;