// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Card, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble, BiCheck} from "react-icons/bi";
import {FaMapMarkerAlt, FaPlay} from "react-icons/fa";

// assets
import avatar from "@/assets/images/avatar.png";
import file from "@/assets/files/lorem-ipsum.pdf";
import image from "@/assets/images/lorem-ipsum.jpg";
import video from "@/assets/videos/lorem-ipsum.mp4";
import voice from "@/assets/voices/lorem-ipsum.mp3";

// utils
import {fontSizeList} from "@/utils/constants.js";
import {convertByte} from "@/utils/functions.js";

const chatList = [
    {
        id: 1,
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        me: true
    },
    {
        id: 2,
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.",
        me: false
    },
    {id: 3, type: "image", content: image, me: true},
    {id: 4, type: "image", content: image, me: false},
    {id: 5, type: "file", content: file, me: true},
    {id: 6, type: "file", content: file, me: false},
    {id: 7, type: "video", content: video, me: true},
    {id: 8, type: "video", content: video, me: false},
    {id: 9, type: "voice", content: voice, me: false},
    {id: 10, type: "voice", content: voice, me: true},
    {id: 11, type: "location", content: [35, 51], me: true},
    {id: 12, type: "location", content: [35, 51], me: false},
];

const TextMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: chat.me ? "primary.main" : "background.paper",
                padding: 1.5,
            }}
        >

            <Typography
                variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                lineHeight={2}
            >
                {chat.content}
            </Typography>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

const ImageMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
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
                bgcolor: chat.me ? "primary.main" : "background.paper",
                padding: 1.5,
            }}
        >

            <LazyLoadImage
                src={chat.content}
                alt="image"
                width={266}
                height={200}
                style={{borderRadius: 8}}
            />

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.secondary",
                    width: "100%"
                }}
            >

                <Typography
                    variant="caption"
                    color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {convertByte(300000)}
                </Typography>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Stack>

        </Card>
    )
}

const FileMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: chat.me ? "primary.main" : "background.paper",
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
                    color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
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
                        color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.primary"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                    >
                        نام فایل
                    </Typography>

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
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
                    color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

const VoiceMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: chat.me ? "primary.main" : "background.paper",
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

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        width: 150,
                    }}
                >

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        00:10 / 00:00
                    </Typography>

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {convertByte(300000)}
                    </Typography>

                </Stack>

                <IconButton
                    color="secondary"
                    variant="contained"
                    size="large"
                >
                    <FaPlay size={20}/>
                </IconButton>

            </Stack>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

const VideoMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: chat.me ? "primary.main" : "background.paper",
                padding: 1.5,
            }}
        >

            <Box
                sx={{position: "relative",}}
            >

                <LazyLoadImage
                    src={image}
                    alt="image"
                    width={266}
                    height={200}
                    style={{borderRadius: 8}}
                />

                <IconButton
                    variant="contained"
                    color="secondary"
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
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "text.secondary",
                    width: "100%"
                }}
            >

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        {convertByte(300000)}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="white"
                    >
                        11:11
                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Stack>

        </Card>
    )
}

const LocationMessage = ({chat}) => {

    const {fontSize} = useSelector(state => state.user.setting);
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: chat.me ? "primary.main" : "background.paper",
                padding: 1,
            }}
        >

            <LazyLoadImage
                src={image}
                alt="image"
                width={250}
                height={150}
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
                    color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

const MessageItem = ({chat}) => {

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: chat.me ? "start" : "end",
                alignItems: "end",
                width: '100%',
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={30}
                height={30}
                style={{
                    order: chat.me ? 1 : 2,
                    borderRadius: "50%",
                }}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    order: chat.me ? 2 : 1,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "max-content",
                }}
            >

                {chat.type === "text" && <TextMessage chat={chat}/>}
                {chat.type === "image" && <ImageMessage chat={chat}/>}
                {chat.type === "file" && <FileMessage chat={chat}/>}
                {chat.type === "voice" && <VoiceMessage chat={chat}/>}
                {chat.type === "video" && <VideoMessage chat={chat}/>}
                {chat.type === "location" && <LocationMessage chat={chat}/>}

            </Stack>

        </Stack>
    )
}

const Messages = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                position: "relative",
                zIndex: 20,
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: 2,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                chatList.map(chatItem =>
                    <MessageItem
                        key={chatItem.id}
                        chat={chatItem}
                    />
                )
            }

        </Stack>
    )
}

export default Messages;

