// libraries
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// assets
import avatar from "../../../../assets/images/avatar.png";
import image from "../../../../assets/other/lorem-ipsum.jpg";
import file from "../../../../assets/other/lorem-ipsum.pdf";
import video from "../../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../../assets/other/lorem-ipsum.mp3";

// components
import {
    TextMessage,
    VideoMessage,
    VoiceMessage,
    ImageMessage,
    LogMessage,
    FileMessage,
    LocationMessage
} from "./Messages.jsx";

const chatList = [
    {id: 1, type: "text", content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود." , me: true},
    {id: 2, type: "text", content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود." , me: false},
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

const ChatItem = ({item}) => {

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: item.me ? "start" : "end",
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
                    order: item.me ? 1 : 2,
                    borderRadius: "50%",
                }}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    order: item.me ? 2 : 1,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "max-content",
                }}
            >

                {item.type === "text" && <TextMessage message={item}/>}
                {item.type === "image" && <ImageMessage message={item}/>}
                {item.type === "file" && <FileMessage message={item}/>}
                {item.type === "voice" && <VoiceMessage message={item}/>}
                {item.type === "video" && <VideoMessage message={item}/>}
                {item.type === "location" && <LocationMessage message={item}/>}
                {item.type === "log" && <LogMessage message={item}/>}

            </Stack>

        </Stack>
    )
}

const ChatList = ({list}) => {

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
                list.map(item =>
                    <ChatItem
                        key={item.id}
                        item={item}
                    />
                )
            }

        </Stack>
    )
}

const Chats = () => {

    return (
        <ChatList list={chatList}/>
    )
}

export default Chats;