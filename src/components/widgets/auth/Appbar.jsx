// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

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
                src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/logo.png"
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