// libraries
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import SimpleBar from "simplebar-react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo} from "react-icons/fi";

const chatList = [
    {
        _id: "1",
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود."
    },
    {_id: "2", type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {_id: "3", type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"},
    {_id: "4", type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"},
    {_id: "5", type: "voice", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"},
    {_id: "6", type: "location", content: [35, 51]},
    {_id: "7", type: "log", status: "voiceCall"},
    {_id: "8", type: "log", status: "videoCall"},
];

const Chats = () => {

    const navigate = useNavigate();
    const params = useParams();
    const {t} = useTranslation();
    const theme = useTheme();

    const _handleActiveItem = (item) => navigate(params.chatId === item._id ? "/" : `/${item._id}`);

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: "calc(100dvh - 148px)",
            }}
        >

            <Stack
                component="ul"
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >

                {
                    chatList.map(chatItem =>
                        <Box
                            key={chatItem._id}
                            component="li"
                            sx={{width: "100%"}}
                            onClick={() => _handleActiveItem(chatItem)}
                        >

                            <Stack
                                direction="row"
                                gap={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center",
                                    bgcolor: params.chatId === chatItem._id && "primary.main",
                                    width: "100%",
                                    borderRadius: 1,
                                    padding: 1.5,
                                    textDecoration: 'none',
                                    cursor: "pointer",
                                }}
                            >

                                <Badge
                                    color="success"
                                    variant="dot"
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                >

                                    <LazyLoadImage
                                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        style={{borderRadius: "50%"}}
                                    />

                                </Badge>

                                <Stack
                                    direction="column"
                                    gap={1}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "start",
                                        width: "calc(100% - 100px)",
                                    }}
                                >

                                    <Typography
                                        variant="subtitle2"
                                        color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                                        fontWeight='bold'
                                        className="text-truncate"
                                    >
                                        علیرضا نقدی
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        gap={1}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            width: "100%",
                                            color: params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                                        }}
                                    >

                                        {chatItem.type === "text" && <LuText size={16}/>}
                                        {chatItem.type === "image" && <LuImage size={16}/>}
                                        {chatItem.type === "video" && <LuFilm size={16}/>}
                                        {chatItem.type === "voice" && <LuMusic size={16}/>}
                                        {chatItem.type === "file" && <LuFile size={16}/>}
                                        {chatItem.type === "location" && <LuMapPin size={16}/>}
                                        {chatItem.type === "log" && chatItem.status === "voiceCall" && <FiPhone size={16}/>}
                                        {chatItem.type === "log" && chatItem.status === "videoCall" && <FiVideo size={16}/>}

                                        <Typography
                                            variant="caption"
                                            color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                                            sx={{
                                                width: "100%",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {chatItem.type === "text" && t("typography.text")}
                                            {chatItem.type === "image" && t("typography.image")}
                                            {chatItem.type === "video" && t("typography.video")}
                                            {chatItem.type === "voice" && t("typography.voice")}
                                            {chatItem.type === "file" && t("typography.file")}
                                            {chatItem.type === "location" && t("typography.location")}
                                            {chatItem.type === "log" && chatItem.status === "voiceCall" && t("typography.voiceCall")}
                                            {chatItem.type === "log" && chatItem.status === "videoCall" && t("typography.videoCall")}
                                        </Typography>

                                    </Stack>

                                    {/*<Typography*/}
                                    {/*    variant="caption"*/}
                                    {/*    color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
                                    {/*>*/}
                                    {/*    ... {t("typography.isTyping")}*/}
                                    {/*</Typography>*/}

                                </Stack>

                                <Stack
                                    direction="column"
                                    gap={1}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "end",
                                        width: 50,
                                        color: params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                                    }}
                                >

                                    <Typography
                                        variant="caption"
                                        color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                                    >
                                        11:11
                                    </Typography>

                                    <BiCheckDouble size={20}/>

                                    {/*<Chip*/}
                                    {/*    variant="filled"*/}
                                    {/*    size="small"*/}
                                    {/*    color="success"*/}
                                    {/*    label="1"*/}
                                    {/*/>*/}

                                </Stack>

                            </Stack>

                        </Box>
                    )
                }

            </Stack>

        </SimpleBar>
    )
}

export default Chats;

