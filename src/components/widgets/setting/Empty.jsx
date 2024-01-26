// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Typography , useMediaQuery} from "@mui/material";

const Empty = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Box
            sx={{
                position: "fixed",
                zIndex: 0,
                top: 0,
                left: isTablet ? 0 : 360,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
                padding: 4
            }}
        >

            <LazyLoadImage
                src={darkMode ? "/images/setting-dark.svg" : "/images/setting-light.svg"}
                alt="empty"
                visibleByDefault
                effect="blur"
                width="100%"
                style={{maxWidth: 240}}
            />

            <Typography
                variant="subtitle2"
                color='textSecondary'
                fontWeight='bold'
            >
                {t("typography.select")}
            </Typography>

        </Box>
    )
}

export default Empty;