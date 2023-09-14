// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LazyLoad from "react-lazy-load";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Typography} from "@mui/material";

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
                gap: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
                padding: 4
            }}
        >

            <LazyLoad
                width="100%"
                threshold={0.5}
            >
                <img
                    src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/setting-dark.svg" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/setting-light.svg"}
                    alt="empty"
                    width="100%"
                    style={{maxWidth: 300}}
                />
            </LazyLoad>

            <Typography
                variant="subtitle1"
                color='textSecondary'
                fontWeight='bold'
            >
                {t("typography.select")}
            </Typography>

        </Box>
    )
}

export default Empty;