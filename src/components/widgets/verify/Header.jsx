// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const Header = () => {

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
                variant="h5"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.verify")}
            </Typography>

        </Stack>
    )
}

export default Header;