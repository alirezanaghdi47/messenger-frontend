// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Card, Chip, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble, BiCheck} from "react-icons/bi";
import {FaPlay} from "react-icons/fa";
import {FiCornerUpRight, FiPhone, FiVideo} from "react-icons/fi";

// assets
import image from "@/assets/other/lorem-ipsum.jpg";

// utils
import {fontSizeList} from "@/utils/constants.js";
import {convertByte, convertTimestamp} from "@/utils/functions.js";

export const TextMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
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

export const ImageMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <Card
            sx={{
                position: "relative",
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
        >

            <Box sx={{position: "relative"}}>

                <LazyLoadImage
                    src={message.content}
                    alt="image"
                    width={266}
                    height="100%"
                    style={{borderRadius: 8}}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message.me ? "primary" : "secondary"}
                        size="small"
                        label={convertByte(300000)}
                    />

                </Box>

            </Box>

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

export const FileMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
        >

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <LazyLoadImage
                    src={image}
                    alt="image"
                    width={50}
                    height={50}
                    style={{borderRadius: 8}}
                />

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.primary"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        نام فایل
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {convertByte(300000)}
                    </Typography>

                </Stack>

            </Stack>

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

export const VoiceMessage = ({message}) => {

    const {fontSize, language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
        >

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <IconButton
                    variant="contained"
                    color={message.me ? "primary" : "secondary"}
                    size="large"
                    sx={{order: language === "fa" ? 2 : 1}}
                >
                    <FaPlay size={20}/>
                </IconButton>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        order: language === "fa" ? 1 : 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: language === "fa" ? "end" : "start",
                        width: 150,
                    }}
                >

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        00:10 / 00:00
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {convertByte(300000)}
                    </Typography>

                </Stack>

            </Stack>

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

export const VideoMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
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

            <Box sx={{position: "relative"}}>

                <LazyLoadImage
                    src={image}
                    alt="image"
                    width={266}
                    height="100%"
                    style={{borderRadius: 8}}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message.me ? "primary" : "secondary"}
                        label="11:11"
                        size="small"
                    />

                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message.me ? "primary" : "secondary"}
                        size="small"
                        label={convertByte(300000)}
                    />

                </Box>

                <IconButton
                    variant="contained"
                    color={message.me ? "primary" : "secondary"}
                    size="large"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)",
                    }}
                >
                    <FaPlay size={20}/>
                </IconButton>

            </Box>

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

export const LocationMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
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
                padding: 1,
            }}
        >

            <LazyLoadImage
                src={image}
                alt="image"
                width={250}
                height="100%"
                style={{borderRadius: 8}}
            />

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

export const LogMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.main" : "background.paper",
                padding: 1,
            }}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center"
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 32,
                        height: 32,
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary",
                        borderRadius: 1
                    }}
                >

                    {(message.content.status === "voiceCall") && <FiPhone size={20}/>}
                    {(message.content.status === "videoCall") && <FiVideo size={20}/>}

                </Box>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                    }}
                >

                    <Typography
                        variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {t(`typography.${message.content.status}`)}
                    </Typography>

                    {
                        message.content.time > 0 && (
                            <Typography
                                variant="caption"
                                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {convertTimestamp(message.content.time)}
                            </Typography>
                        )
                    }

                </Stack>

            </Stack>

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

const Message = () => {
    return null;
}

export default Message;