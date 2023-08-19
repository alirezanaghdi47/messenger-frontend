// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Button, Stack, Typography} from "@mui/material";

// components
import Ternary from "../../components/layouts/Ternary.jsx";

// assets
import notFoundDark from "../../assets/images/not-found-dark.svg";
import notFoundLight from "../../assets/images/not-found-light.svg";

const NotFound = () => {

    const navigate = useNavigate();
    const {darkMode} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();

    return (
        <Ternary>

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <LazyLoadImage
                    src={darkMode ? notFoundDark : notFoundLight}
                    alt="select-chat"
                    width={300}
                />

                <Typography
                    variant="h6"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("typography.notFound")}
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(-1)}
                >
                    {t("button.back")}
                </Button>

            </Stack>

        </Ternary>
    )
}

export default NotFound;