// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LazyLoad from "react-lazy-load";
import {Button, Stack, Typography} from "@mui/material";

const Error = () => {

    const navigate = useNavigate();
    const {darkMode} = useSelector(state => state.profile.setting);
    const {t} = useTranslation();

    return (
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

            <LazyLoad
                width={300}
                threshold={0.5}
            >
                <img
                    src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/not-found-dark.svg" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/not-found-light.svg"}
                    alt="select-chat"
                    width={300}
                />
            </LazyLoad>

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
    )
}

export default Error;