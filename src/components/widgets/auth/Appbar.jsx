// libraries
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";

const Appbar = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const _handleBack = () => navigate("/chat");
    
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
            onClick={_handleBack}
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