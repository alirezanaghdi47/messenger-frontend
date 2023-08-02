// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography} from "@mui/material";

// assets
import selectItemLight from "@/assets/images/select-item-light.svg";
import selectItemDark from "@/assets/images/select-item-dark.svg";

const Empty = () => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "calc(100% - 300px)",
            }}
        >

            <LazyLoadImage
                src={darkMode ? selectItemDark : selectItemLight}
                alt="select-chat"
                width={300}
            />

            <Typography
                variant="h6"
                color="textSecondary"
                fontWeight='bold'
            >
                {t("typography.selectItem")}
            </Typography>

        </Stack>
    )
}

export default Empty;