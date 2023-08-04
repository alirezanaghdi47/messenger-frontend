// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Button, Stack, Typography} from "@mui/material";
import {FiSettings, FiUser} from "react-icons/fi";

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

            <Button
                component={Link}
                to="/setting"
                variant="text"
                size="small"
                color={location.pathname === "/setting" ? "primary" : "secondary"}
                startIcon={<FiSettings size={20}/>}
            >
                {t("list.setting")}
            </Button>

        </Stack>
    )
}

export default Header;

