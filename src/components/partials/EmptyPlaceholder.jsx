// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LazyLoad from 'react-lazy-load';
import {Box, Typography} from "@mui/material";

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

            <LazyLoad
                width="100%"
                threshold={0.5}
            >
                <img
                    src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-dark.svg" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-light.svg"}
                    alt="empty"
                    width="100%"
                    style={{maxWidth: 100}}
                />
            </LazyLoad>

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