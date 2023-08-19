// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// assets
import logo from "../../../assets/images/logo.png";

const Appbar = () => {

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
                src={logo}
                alt="logo"
                width={40}
                height={40}
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