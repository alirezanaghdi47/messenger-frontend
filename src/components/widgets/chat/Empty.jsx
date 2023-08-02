// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack, Typography, Card} from "@mui/material";

// assets
import selectChatDark from "@/assets/images/select-chat-dark.svg";
import selectChatLight from "@/assets/images/select-chat-light.svg";

const Empty = () => {

    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <Card
            sx={{
                width: "100%",
                padding: 4
            }}
        >

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

                <LazyLoadImage
                    src={darkMode ? selectChatDark : selectChatLight}
                    alt="select-chat"
                    width={200}
                />

                <Typography
                    variant="h6"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("typography.selectChat")}
                </Typography>

            </Stack>

        </Card>
    )
}

export default Empty;