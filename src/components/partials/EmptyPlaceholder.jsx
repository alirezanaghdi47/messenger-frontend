// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {AsyncImage} from "loadable-image";
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

            <AsyncImage
                src={darkMode ? "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-dark.svg" : "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/no-data-light.svg"}
                alt="empty"
                style={{
                    width: "100%",
                    maxWidth: 240,
                    aspectRatio: 3 / 2
                }}
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