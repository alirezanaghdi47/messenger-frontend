// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack, Typography} from "@mui/material";
import {FiSettings} from "react-icons/fi";

const Appbar = () => {

    const navigate = useNavigate();
    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    const _handleRedirect = () => {
        navigate("/setting");
    }

    return (
        <Stack
            component="nav"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                bgcolor: "background.paper",
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

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: 'center',
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                    onClick={_handleRedirect}
                >
                    <FiSettings size={20}/>
                </IconButton>

            </Stack>

        </Stack>
    )
}

export default Appbar;

