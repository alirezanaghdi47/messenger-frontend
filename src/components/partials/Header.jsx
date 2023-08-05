// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Stack, Typography} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

const Header = () => {

    const {t} = useTranslation();

    return (
        <Stack
            component="header"
            direction="row"
            gap={1}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 70,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: 'center',
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                />

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight="bold"
                    sx={{marginLeft: 1}}
                >
                    {t("domain")}
                </Typography>

            </Box>

        </Stack>
    )
}

export default Header;

