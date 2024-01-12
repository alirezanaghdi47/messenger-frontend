// libraries
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Button, Stack, Typography} from "@mui/material";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";


const Error = () => {

    const navigate = useNavigate();
    const {darkMode , language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <LazyLoadImage
                src={darkMode ? "/images/not-found-dark.svg" : "/images/not-found-light.svg"}
                alt="select-chat"
                visibleByDefault
                effect="blur"
                width="100%"
                style={{maxWidth: 300}}
            />

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.notFound")}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                endIcon={language === "fa" ? <LuChevronLeft size={20}/> : <LuChevronRight size={20}/>}
                onClick={() => navigate(-1)}
            >
                {t("button.back")}
            </Button>

        </Stack>
    )
}

export default Error;