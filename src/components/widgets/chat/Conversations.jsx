// libraries
import {forwardRef, useLayoutEffect} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// components
import {
    FileMessage,
    TextMessage,
    LocationMessage,
    LogMessage,
    VideoMessage,
    ImageMessage,
    MusicMessage
} from "components/widgets/chat/Messages";

const conversationList = [
    {
        _id: "1",
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
        me: true
    },
    {
        _id: "2",
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود.",
        me: false
    },
    {
        _id: "3",
        type: "image",
        content: "/images/desktop-1.jpg",
        me: true
    },
    {
        _id: "4",
        type: "image",
        content: "/images/desktop-1.jpg",
        me: false
    },
    {
        _id: "5",
        type: "file",
        content: "/data/lorem-ipsum.pdf",
        me: true
    },
    {
        _id: "6",
        type: "file",
        content: "/data/lorem-ipsum.pdf",
        me: false
    },
    {
        _id: "7",
        type: "video",
        content: "/data/lorem-ipsum.3gp",
        me: true
    },
    {
        _id: "8",
        type: "video",
        content: "/data/lorem-ipsum.3gp",
        me: false
    },
    {
        _id: "9",
        type: "music",
        content: "/data/lorem-ipsum.mp3",
        me: false
    },
    {
        _id: "10",
        type: "music",
        content: "/data/lorem-ipsum.mp3",
        me: true
    },
    {
        _id: "11",
        type: "location",
        content: [35.9624, 53.1234],
        me: true
    },
    {
        _id: "12",
        type: "location",
        content: [35.9624, 53.1234],
        me: false
    },
    {
        _id: "13",
        type: "log",
        content: {time: 60 * 1000, status: "videoCall"},
        me: true
    },
    {
        _id: "14",
        type: "log",
        content: {time: 90 * 1000, status: "voiceCall"},
        me: false
    },
    {
        _id: "15",
        type: "log",
        content: {time: 50 * 1000, status: "voiceCall"},
        me: false
    },
    {
        _id: "16",
        type: "log",
        content: {time: 0, status: "videoCall"},
        me: true
    },
];

const ConversationItem = ({conversationItem}) => {

    return (
        <Stack
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
                    src="/images/avatar.jpg"
                    alt="avatar"
                    visibleByDefault
                    effect="blur"
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
                {conversationItem.type === "music" && <MusicMessage message={conversationItem}/>}
                {conversationItem.type === "video" && <VideoMessage message={conversationItem}/>}
                {conversationItem.type === "location" && <LocationMessage message={conversationItem}/>}
                {conversationItem.type === "log" && <LogMessage message={conversationItem}/>}

            </Stack>

        </Stack>
    )
}

const Conversations = forwardRef((props, ref) => {

    useLayoutEffect(() => {
        ref?.current?.scrollTo({top: ref?.current?.scrollHeight});
    }, []);

    return (
        <Stack
            id="messages"
            ref={ref}
            component="ul"
            direction="column"
            gap={2}
            className="custom-scrollbar"
            sx={{
                position: "absolute",
                top: 80,
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "calc(100dvh - 160px)",
                padding: 2,
                overflowY: "scroll"
            }}
        >

            {
                conversationList.map(conversationItem =>
                    <ConversationItem
                        key={conversationItem?._id}
                        conversationItem={conversationItem}
                    />
                )
            }

        </Stack>
    )
})

export default Conversations;