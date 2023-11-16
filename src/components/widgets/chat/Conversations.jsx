// libraries
import {useCallback, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Virtuoso} from 'react-virtuoso';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, Stack} from "@mui/material";
import {LuChevronDown} from "react-icons/lu";

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

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

// utils
import {generateConversations} from "utils/functions";

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
                padding: 2
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
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    visibleByDefault
                    effect="blur"
                    placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
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

    const {darkMode} = useSelector(state => state.setting.appearance);
    const listRef = useRef();

    const [showButton, setShowButton] = useState(false);

    const START_INDEX = 10000;
    const INITIAL_ITEM_COUNT = 20;

    const [firstItemIndex, setFirstItemIndex] = useState(START_INDEX);
    const [conversations, setConversations] = useState(() => generateConversations(INITIAL_ITEM_COUNT, START_INDEX));

    const prependItems = useCallback(() => {
        const itemsToPrepend = 10;
        const nextFirstItemIndex = firstItemIndex - itemsToPrepend;

        setTimeout(() => {
            setFirstItemIndex(() => nextFirstItemIndex);
            setConversations(() => [...generateConversations(itemsToPrepend, nextFirstItemIndex), ...conversations]);
        }, 500);

        return false;
    }, [firstItemIndex, conversations , setConversations]);

    return (
        <>

            <Virtuoso
                ref={listRef}
                firstItemIndex={firstItemIndex}
                initialTopMostItemIndex={INITIAL_ITEM_COUNT - 1}
                data={conversations}
                startReached={prependItems}
                itemContent={(index, conversationItem) => (
                    <ConversationItem
                        key={index}
                        conversationItem={conversationItem}
                    />
                )}
                followOutput="auto"
                atBottomStateChange={(bottom) => {
                    setShowButton(!bottom);
                }}
                className="custom-scrollbar"
                style={{
                    position: "sticky",
                    top: 80,
                    width: "100%",
                    height: "calc(100dvh - 160px)",
                }}
            />

            {
                showButton && (
                    <IconButton
                        variant="contained"
                        color={darkMode ? "dark" : "light"}
                        size="large"
                        sx={{
                            position: 'absolute',
                            zIndex: 25,
                            left: 16,
                            bottom: 96,
                            boxShadow: 3
                        }}
                        onClick={() => listRef.current.scrollToIndex({index: conversations.length - 1, behavior: 'smooth'})}
                    >
                        <LuChevronDown size={20}/>
                    </IconButton>
                )
            }

        </>
    )
}

export default Conversations;