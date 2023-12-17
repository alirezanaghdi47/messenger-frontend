// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Typography} from "@mui/material";

const Orientation = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100dvh",
                padding: 4
            }}
        >

            <LazyLoadImage
                src={darkMode ? "/images/orientation-dark.svg" : "/images/orientation-light.svg"}
                alt="empty"
                visibleByDefault
                effect="blur"
                width="100%"
                style={{maxWidth: 150}}
            />

            <Typography
                variant="subtitle1"
                color='textSecondary'
                fontWeight='bold'
            >
                {t("typography.preventOrientation")}
            </Typography>

        </Box>
    )
}

export default Orientation;