// libraries
import {useContext, useEffect, useRef} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useToggle} from "@react-hooks-library/core";
import {alpha, Stack, useTheme, useMediaQuery} from "@mui/material";

// components
import Header from "components/widgets/chat/Header.jsx";
import Footer from "components/widgets/chat/Footer.jsx";
import Conversations from "components/widgets/chat/Conversations.jsx";
import ScrollBottom from "components/widgets/chat/ScrollBottom";
import NoData from "components/partials/NoData";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

// providers
import {SocketContext} from "providers/SocketProvider";

// stores
import {useGetChatQuery} from "stores/apis/chatApi";
import {useGetAllMessageQuery} from "stores/apis/messageApi";

const ChatPage = () => {

    const listRef = useRef(null);
    const params = useParams();
    const navigate = useNavigate();
    const {background} = useSelector(state => state.setting.appearance);
    const {activeChat, messages} = useSelector(state => state.chat);
    const {isFetching: isFetchingActiveChat, refetch: refetchActiveChat} = useGetChatQuery(params.chatId);
    const {isFetching: isFetchingMessages, refetch: refetchMessages} = useGetAllMessageQuery(params.chatId);
    const {socket} = useContext(SocketContext);
    const {bool: showScrollBottom, setTrue: _handleShowScrollBottom, setFalse: _handleHideScrollBottom} = useToggle();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const theme = useTheme();

    useEffect(() => {
        refetchActiveChat();
        refetchMessages();
    }, [params.chatId]);

    useEffect(() => {
        if (!isFetchingMessages){
            setTimeout(() => {
                listRef?.current?.scrollToIndex({
                    index: messages?.length,
                    align: "bottom",
                    behavior: "auto"
                });
            } , 150);
        }
    }, [isFetchingMessages , messages]);

    useEffect(() => {
        socket?.current?.on("deleteChatResponse", data => {
            if (params.chatId === data) navigate("/chat");
        });
        socket?.current?.emit("joinRoom", {chatId: params?.chatId, socketId: socket?.current?.id});

        return () => socket?.current?.emit("leaveRoom", {chatId: params?.chatId, socketId: socket?.current?.id});
    }, [socket.current, params.chatId]);

    if (!isFetchingActiveChat && !isFetchingMessages && !activeChat?._id) {
        return <Navigate to="/chat"/>;
    }

    return !isFetchingActiveChat && !isFetchingMessages && activeChat?._id && (
        <Stack
            component="main"
            direction="column"
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                bottom: 0,
                left: isTablet ? 0 : 360,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
                backgroundImage: messages?.length > 0 ? `url(${background})` : "unset",
                backgroundColor: messages?.length > 0 ? "transparent" : theme.palette.background.paper,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: alpha(theme.palette.background.default, 0.5),
                }
            }}
        >

            <Header/>

            {
                messages?.length > 0 ? (
                    <Conversations
                        listRef={listRef}
                        _handleShowScrollBottom={_handleShowScrollBottom}
                        _handleHideScrollBottom={_handleHideScrollBottom}
                    />
                ) : (
                    <NoData/>
                )
            }

            <ScrollBottom
                showScrollBottom={showScrollBottom}
                messagesCount={messages?.length}
                listRef={listRef}
            />

            <Footer />

        </Stack>
    )
}

export default PrivateRouteHoc(ChatPage);