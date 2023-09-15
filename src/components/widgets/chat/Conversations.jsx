// libraries
import {useCallback, useEffect, useLayoutEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {VariableSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
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
    {
        id: 3,
        type: "image",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg",
        me: true
    },
    {
        id: 4,
        type: "image",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg",
        me: false
    },
    {
        id: 5,
        type: "file",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf",
        me: true
    },
    {
        id: 6,
        type: "file",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf",
        me: false
    },
    {
        id: 7,
        type: "video",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp",
        me: true
    },
    {
        id: 8,
        type: "video",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp",
        me: false
    },
    {
        id: 9,
        type: "voice",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3",
        me: false
    },
    {
        id: 10,
        type: "voice",
        content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3",
        me: true
    },
    {id: 11, type: "location", content: [35, 51], me: true},
    {id: 12, type: "location", content: [35, 51], me: false},
    {id: 13, type: "log", content: {time: 60 * 1000, status: "videoCall"}, me: true},
    {id: 14, type: "log", content: {time: 90 * 1000, status: "voiceCall"}, me: false},
    {id: 15, type: "log", content: {time: 50 * 1000, status: "voiceCall"}, me: false},
    {id: 16, type: "log", content: {time: 0, status: "videoCall"}, me: true},
];

const ConversationItem = ({conversationItem, index, setSize}) => {

    const rowRef = useRef();

    useEffect(() => {
        setSize(index, rowRef.current.getBoundingClientRect().height);
    }, [setSize, index]);

    return (
        <Stack
            ref={rowRef}
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

                <img
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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

const Conversations = () => {

    const listRef = useRef();
    const sizeMap = useRef({});
    const {language} = useSelector(state => state.setting.appearance);

    const setSize = useCallback((index, size) => {
        sizeMap.current = {...sizeMap.current, [index]: size};
        listRef.current.resetAfterIndex(index);
    }, []);

    const getSize = index => sizeMap.current[index] + 32 || 200 + 32;

    useLayoutEffect(() => {
        setTimeout(() => {
            listRef?.current?.scrollToItem(conversationList.length);
        }, 100);
    }, []);

    return (
        <AutoSizer
            style={{
                position: "sticky",
                top: 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100dvh - 160px)",
            }}
        >
            {
                ({height, width}) => (
                    <List
                        ref={listRef}
                        direction={language === "fa" ? "rtl" : "ltr"}
                        width={width}
                        height={height}
                        itemCount={conversationList.length}
                        itemSize={getSize}
                        className="remove-scrollbar"
                    >
                        {
                            ({index, style}) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: '0 16px',
                                        ...style,
                                    }}
                                >
                                    <ConversationItem
                                        index={index}
                                        conversationItem={conversationList[index]}
                                        setSize={setSize}
                                    />
                                </div>
                            )
                        }
                    </List>
                )
            }
        </AutoSizer>
    )
}

export default Conversations;