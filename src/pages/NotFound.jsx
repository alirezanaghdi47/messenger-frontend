// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Button, Container, Stack, Typography} from "@mui/material";

// assets
import notFoundDark from "@/assets/images/not-found-dark.svg";
import notFoundLight from "@/assets/images/not-found-light.svg";

const NotFound = () => {

    const navigate = useNavigate();
    const {darkMode} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();

    return (
        <Container
            maxWidth="sm"
            disableGutters
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: "100dvh",
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

        </Container>
    )
}

export default NotFound;