// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Menu, MenuItem, Stack, Typography} from "@mui/material";
import {FiDownload, FiMoreVertical, FiTrash2} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";
import image from "../../../assets/other/lorem-ipsum.jpg";
import file from "../../../assets/other/lorem-ipsum.pdf";
import video from "../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../assets/other/lorem-ipsum.mp3";

// components
import TextMessage from "./messages/TextMessage";
import FileMessage from "./messages/FileMessage";
import ImageMessage from "./messages/ImageMessage";
import MusicMessage from "./messages/MusicMessage";
import VideoMessage from "./messages/VideoMessage";
import LocationMessage from "./messages/LocationMessage";
import LogMessage from "./messages/LogMessage";

const chatList = [
    {
        id: 1,
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
        me: true
    },
    {
        id: 2,
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
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
    {id: 13, type: "log", content: {time: 60 * 1000, status: "videoCall"}, me: true},
    {id: 14, type: "log", content: {time: 90 * 1000, status: "voiceCall"}, me: false},
    {id: 15, type: "log", content: {time: 50 * 1000, status: "voiceCall"}, me: false},
    {id: 16, type: "log", content: {time: 0, status: "videoCall"}, me: true},
];

const ChatMenu = ({item}) => {

    const {t} = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>

            <IconButton
                varinat="text"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: item.me ? "left" : "right",
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: item.me ? "right" : "left",
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiTrash2 size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteChat")}
                    </Typography>

                </MenuItem>

                {
                    ["video" , "voice" , "image" , "file"].includes(item.type) && (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            <FiDownload size={20}/>

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                fontWeight='bold'
                            >
                                {t("menu.download")}
                            </Typography>

                        </MenuItem>
                    )
                }

            </Menu>

        </>
    )
}

const Messages = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: 4,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                chatList.map(chatItem =>
                    <Stack
                        component="li"
                        direction="row"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: chatItem.me ? "start" : "end",
                            alignItems: "end",
                            width: '100%',
                        }}
                    >

                        <Stack
                            direction="column"
                            gap={1}
                            sx={{
                                order: chatItem.me ? 1 : 2,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "start",
                                height: "100%",
                            }}
                        >

                            <ChatMenu item={chatItem}/>

                            <LazyLoadImage
                                src={avatar}
                                alt="avatar"
                                width={30}
                                height={30}
                                style={{borderRadius: "50%"}}
                            />

                        </Stack>

                        <Stack
                            direction="column"
                            gap={1}
                            sx={{
                                order: chatItem.me ? 2 : 1,
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "start",
                                width: "max-content",
                            }}
                        >

                            {chatItem.type === "text" && <TextMessage message={chatItem}/>}
                            {chatItem.type === "image" && <ImageMessage message={chatItem}/>}
                            {chatItem.type === "file" && <FileMessage message={chatItem}/>}
                            {chatItem.type === "voice" && <MusicMessage message={chatItem}/>}
                            {chatItem.type === "video" && <VideoMessage message={chatItem}/>}
                            {chatItem.type === "location" && <LocationMessage message={chatItem}/>}
                            {chatItem.type === "log" && <LogMessage message={chatItem}/>}

                        </Stack>

                    </Stack>
                )
            }

        </Stack>
    )
}

export default Messages;