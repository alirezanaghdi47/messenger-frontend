// libraries
import {useSelector} from "react-redux";
import {Virtuoso} from 'react-virtuoso';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack} from "@mui/material";
import {FiUser} from "react-icons/fi";

// components
import {
    FileMessage,
    TextMessage,
    VideoMessage,
    ImageMessage,
    MusicMessage,
    QueueMessage
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

                {
                    conversationItem?.userId?.avatar ? (
                        <LazyLoadImage
                            src={conversationItem?.userId?.avatar}
                            alt="avatar"
                            visibleByDefault
                            effect="blur"
                            width={30}
                            height={30}
                            style={{borderRadius: "50%"}}
                        />
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: "background.default",
                                color: "ternary.main",
                                width: 40,
                                height: 40,
                                borderRadius: "50%"
                            }}
                        >
                            <FiUser size={20}/>
                        </Box>
                    )
                }

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
                {conversationItem.type === 6 && <QueueMessage/>}

            </Stack>

        </Stack>
    )
}

const Conversations = ({listRef}) => {

    const {messages} = useSelector(state => state.chat);

    return (
        <Virtuoso
            ref={listRef}
            totalCount={messages}
            data={messages}
            followOutput="smooth"
            itemContent={(index, message) =>
                <Box
                    sx={{
                        paddingX: 1,
                        paddingY: 2,
                    }}
                >
                    <ConversationItem
                        key={message?._id}
                        conversationItem={message}
                    />
                </Box>
            }
            style={{
                position: "absolute",
                top: 80,
                width: "100%",
                height: "calc(100dvh - 160px)",
                overflowX: "hidden",
                paddingTop: 16
            }}
            className="custom-scrollbar"
        />
    )
}

export default Conversations;