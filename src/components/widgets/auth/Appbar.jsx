// libraries
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

const Appbar = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    
    return(
        <Stack
            component={Link}
            direction="row"
            gap={1}
            to="/"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                width: "100%",
                textDecoration: "none",
            }}
        >

            <LazyLoadImage
                src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/logo-dark.png" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/logo-light.png"}
                alt="logo"
                width={24}
                height={24}
            />

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("domain")}
            </Typography>

        </Stack>
    )
}

export default Appbar;