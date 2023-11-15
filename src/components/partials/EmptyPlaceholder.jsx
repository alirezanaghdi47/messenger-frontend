// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Typography} from "@mui/material";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const EmptyPlaceholder = () => {

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
                src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-dark.svg" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-light.svg"}
                alt="empty"
                visibleByDefault
                effect="blur"
                placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
                width="100%"
                style={{maxWidth: 150}}
            />


            <Typography
                variant="subtitle1"
                color='textSecondary'
                fontWeight='bold'
            >
                {t("typography.empty")}
            </Typography>

        </Box>
    )
}

export default EmptyPlaceholder;