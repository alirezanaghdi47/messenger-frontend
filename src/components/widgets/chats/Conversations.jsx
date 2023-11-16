// libraries
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {Virtuoso} from "react-virtuoso";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo} from "react-icons/fi";

// components
import {useContextMenu} from "hooks/useContextMenu";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const ConversationDropdownMenu = Loadable(() => import("components/widgets/chats/ConversationDropdownMenu"));

const conversationList = [
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
    {
        _id: "9",
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود."
    },
    {_id: "10", type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {
        _id: "11",
        type: "image",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
    },
    {
        _id: "12",
        type: "video",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"
    },
    {
        _id: "13",
        type: "voice",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"
    },
    {_id: "14", type: "location", content: [35, 51]},
    {_id: "15", type: "log", status: "voiceCall"},
    {_id: "16", type: "log", status: "videoCall"},
];

const ConversationItem = ({conversationItem}) => {

    const navigate = useNavigate();
    const params = useParams();
    const {t} = useTranslation();
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    const _handleActiveItem = (item) => navigate(params.chatId === item._id ? "/chat" : `/chat/${item._id}`);

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => _handleActiveItem(conversationItem)}
            onContextMenu={_handleShowContextMenu}
        >

            <ConversationDropdownMenu
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: params.chatId === conversationItem._id && "primary.main",
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
                        visibleByDefault
                        width={40}
                        height={40}
                        placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
                        effect='blur'
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
                        color={params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
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
                            color: params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                        }}
                    >

                        {conversationItem.type === "text" && <LuText size={16}/>}
                        {conversationItem.type === "image" && <LuImage size={16}/>}
                        {conversationItem.type === "video" && <LuFilm size={16}/>}
                        {conversationItem.type === "voice" && <LuMusic size={16}/>}
                        {conversationItem.type === "file" && <LuFile size={16}/>}
                        {conversationItem.type === "location" && <LuMapPin size={16}/>}
                        {conversationItem.type === "log" && conversationItem.status === "voiceCall" &&
                            <FiPhone size={16}/>}
                        {conversationItem.type === "log" && conversationItem.status === "videoCall" &&
                            <FiVideo size={16}/>}

                        <Typography
                            variant="caption"
                            color={params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                            sx={{
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            {conversationItem.type === "text" && t("typography.text")}
                            {conversationItem.type === "image" && t("typography.image")}
                            {conversationItem.type === "video" && t("typography.video")}
                            {conversationItem.type === "voice" && t("typography.voice")}
                            {conversationItem.type === "file" && t("typography.file")}
                            {conversationItem.type === "location" && t("typography.location")}
                            {conversationItem.type === "log" && conversationItem.status === "voiceCall" && t("typography.voiceCall")}
                            {conversationItem.type === "log" && conversationItem.status === "videoCall" && t("typography.videoCall")}
                        </Typography>

                    </Stack>

                    {/*<Typography*/}
                    {/*    variant="caption"*/}
                    {/*    color={params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
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
                        color: params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <Typography
                        variant="caption"
                        color={params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
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

const Conversations = () => {

    return (
        <Virtuoso
            data={conversationList}
            totalCount={conversationList.length}
            itemContent={(index, conversationItem) => (
                <ConversationItem
                    key={index}
                    conversationItem={conversationItem}
                />
            )}
            className="custom-scrollbar"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100dvh - 140px)",
            }}
        />
    )
}

export default Conversations;

