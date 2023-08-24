// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Card, Stack, Typography, useTheme} from "@mui/material";
import {FiCornerUpRight} from "react-icons/fi";
import {BiCheckDouble} from "react-icons/bi";

// utils
import {fontSizeList} from "../../../../utils/constants";

export const TextMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
        >

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <FiCornerUpRight size={20}/>

                <Typography
                    variant="body2"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    fontWeight="bold"
                >
                    {t("typography.forwarded")} &nbsp;     علیرضا نقدی
                </Typography>

            </Stack>

            <Typography
                variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                lineHeight={2}
            >
                {message.content}
            </Typography>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export default TextMessage