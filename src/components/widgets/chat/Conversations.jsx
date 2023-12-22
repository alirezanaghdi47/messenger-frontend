// libraries
import {forwardRef, useLayoutEffect} from "react";
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// components
import {
    FileMessage,
    TextMessage,
    LocationMessage,
    VideoMessage,
    ImageMessage,
    MusicMessage
} from "components/widgets/chat/Messages";

const ConversationItem = ({conversationItem}) => {

    const {_id} = useSelector(state => state.setting.profile);

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: conversationItem?.userId?._id === _id ? "start" : "end",
                alignItems: "end",
                width: '100%',
            }}
        >

            <Stack
                direction="column"
                gap={1}
                sx={{
                    order: conversationItem?.userId?._id === _id ? 1 : 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    height: "100%",
                }}
            >

                <LazyLoadImage
                    src={conversationItem?.userId?.avatar}
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
                    order: conversationItem?.userId?._id === _id ? 2 : 1,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "max-content",
                }}
            >

                {conversationItem.type === 0 && <TextMessage message={conversationItem}/>}
                {conversationItem.type === 1 && <FileMessage message={conversationItem}/>}
                {conversationItem.type === 2 && <ImageMessage message={conversationItem}/>}
                {conversationItem.type === 3 && <MusicMessage message={conversationItem}/>}
                {conversationItem.type === 4 && <VideoMessage message={conversationItem}/>}
                {conversationItem.type === 5 && <LocationMessage message={conversationItem}/>}

            </Stack>

        </Stack>
    )
}

const Conversations = forwardRef(({data , error , isLoading}, ref) => {

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
                !isLoading && !error && data.map(conversationItem =>
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