// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Typography} from "@mui/material";

const NoData = () => {

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
                height: "100%",
                padding: 4
            }}
        >

            <LazyLoadImage
                src={darkMode ? "/images/no-data-dark.svg" : "/images/no-data-light.svg"}
                alt="empty"
                visibleByDefault
                effect="blur"
                width="100%"
                style={{maxWidth: 120}}
            />

            <Typography
                variant="subtitle2"
                color='textSecondary'
                fontWeight='bold'
            >
                {t("typography.empty")}
            </Typography>

        </Box>
    )
}

export default NoData;