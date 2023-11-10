// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const Appbar = () => {

    const {t} = useTranslation();

    return(
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                textDecoration: "none",
                cursor: "pointer"
            }}
            // onClick={() => navigate("/chat")}
        >

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("domain")}
            </Typography>

        </Stack>
    )
}

export default Appbar;