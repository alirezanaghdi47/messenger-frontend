// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import SimpleBar from "simplebar-react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack} from "@mui/material";
import {FiMoreVertical} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";
import image from "../../../assets/other/lorem-ipsum.jpg";
import file from "../../../assets/other/lorem-ipsum.pdf";
import video from "../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../assets/other/lorem-ipsum.mp3";

// components
import {
    FileMessage,
    TextMessage,
    LocationMessage,
    LogMessage,
    VideoMessage,
    ImageMessage,
    MusicMessage
} from "./Messages";

const conversationList = [
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

const Conversations = () => {

    const {darkMode} = useSelector(state => state.setting.appearance);

    const [anchorEl, setAnchorEl] = useState(null);

    const _handleShowDropdown = (e) => setAnchorEl(e.currentTarget);
    const _handleHideDropdown = (e) => setAnchorEl(null);

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: "calc(100dvh - 160px)",
                top: 80,
            }}
        >

            <Stack
                component="ul"
                direction="column"
                id="messages"
                gap={2}
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    height: "100%",
                    padding: 4,
                }}
            >

                {
                    conversationList.map((conversationItem, index) =>
                        <Stack
                            key={conversationItem.id}
                            component="li"
                            direction="row"
                            gap={1}
                            sx={{
                                display: "flex",
                                justifyContent: conversationItem.me ? "start" : "end",
                                alignItems: "end",
                                width: '100%',
                            }}
                        >

                            <Stack
                                direction="column"
                                gap={1}
                                sx={{
                                    order: conversationItem.me ? 1 : 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "start",
                                    height: "100%",
                                }}
                            >

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
                                    order: conversationItem.me ? 2 : 1,
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    width: "max-content",
                                }}
                            >

                                {conversationItem.type === "text" && <TextMessage message={conversationItem}/>}
                                {conversationItem.type === "image" && <ImageMessage message={conversationItem}/>}
                                {conversationItem.type === "file" && <FileMessage message={conversationItem}/>}
                                {conversationItem.type === "voice" && <MusicMessage message={conversationItem}/>}
                                {conversationItem.type === "video" && <VideoMessage message={conversationItem}/>}
                                {conversationItem.type === "location" && <LocationMessage message={conversationItem}/>}
                                {conversationItem.type === "log" && <LogMessage message={conversationItem}/>}

                            </Stack>

                        </Stack>
                    )
                }

            </Stack>

        </SimpleBar>
    )
}

export default Conversations;