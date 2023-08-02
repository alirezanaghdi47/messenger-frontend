// libraries
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {IconButton, Stack, Typography} from "@mui/material";
import {FiUser} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

const AppBar = () => {

    const navigate = useNavigate();
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

            <Link
                to="/"
                style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: 'center',
                    textDecoration: "none"
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

            </Link>

            <IconButton
                variant="text"
                color="secondary"
                onClick={() => navigate("/user")}
            >
                <FiUser size={20}/>
            </IconButton>

        </Stack>
    )
}

export default AppBar;

