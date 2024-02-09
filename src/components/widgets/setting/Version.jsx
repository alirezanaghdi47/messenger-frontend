// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const version = "1.9.6";

const Version = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={1}
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
            >
                {t("typography.version")} {version}
            </Typography>

        </Stack>
    )
}

export default Version;

