// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {IconButton, Stack, Typography} from "@mui/material";
import {FiUser} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

const Header = () => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}
        >

            <Stack
                direction="row"
                gap={1}
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
                >
                    {t("domain")}
                </Typography>

            </Stack>

            <IconButton
                variant="text"
                color="secondary"
            >
                <FiUser
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
            </IconButton>

        </Stack>
    )
}

export default Header;

