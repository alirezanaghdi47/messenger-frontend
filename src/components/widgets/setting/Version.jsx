// libraries
import {useTranslation} from "react-i18next";
import {Box, Typography} from "@mui/material";

// utils
import {version} from "@/utils/constants.js";

const Version = () => {

    const {t} = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
            >
                {t("typography.version")} {version}
            </Typography>

        </Box>
    )
}

export default Version;

