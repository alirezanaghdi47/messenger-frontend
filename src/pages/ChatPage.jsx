// libraries
import {useContext, useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Loadable from "@loadable/component";
import {alpha, Stack, useTheme, useMediaQuery} from "@mui/material";

// components
import Header from "components/widgets/chat/Header.jsx";
import Footer from "components/widgets/chat/Footer.jsx";
import Conversations from "components/widgets/chat/Conversations.jsx";
import ActionButton from "components/widgets/chat/ActionButton";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {useGetChatQuery} from "stores/apis/chatApi";
import {useGetAllMessageQuery} from "stores/apis/messageApi";

const ImagePreviewModal = Loadable(() => import("components/widgets/chat/ImagePreviewModal"));
const MusicPlayerModal = Loadable(() => import("components/widgets/chat/MusicPlayerModal"));
const VideoPlayerModal = Loadable(() => import("components/widgets/chat/VideoPlayerModal"));
const ForwardChatModal = Loadable(() => import("components/widgets/chat/ForwardChatModal"));
const ReplyChatPopup = Loadable(() => import("components/widgets/chat/ReplyChatPopup"));
const DeleteChatModal = Loadable(() => import("components/widgets/chat/DeleteChatModal"));
const DeleteContactModal = Loadable(() => import("components/widgets/chat/DeleteContactModal"));

const ChatPage = () => {

    const lastMessageRef = useRef(null);
    const params = useParams();
    const navigate = useNavigate();
    const {modal, popup} = useSelector(state => state.app);
    const {background} = useSelector(state => state.setting.appearance);
    const {activeChat , messages} = useSelector(state => state.chat);
    const {isFetching: isFetchingActiveChat, refetch: refetchActiveChat} = useGetChatQuery(params.chatId);
    const {isFetching: isFetchingMessages , refetch: refetchMessages} = useGetAllMessageQuery(params.chatId);
    const {socket} = useContext(SocketContext);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const theme = useTheme();

    useEffect(() => {
        refetchActiveChat();
        refetchMessages();
    } , [params.chatId]);

    useEffect(() => {
        if (!isFetchingActiveChat && (!activeChat || Object.keys(activeChat).length === 0)){
            navigate("/chat");
        }
    }, [activeChat?._id]);

    useEffect(() => {
        socket?.current?.on("deleteChatResponse", data => {
            if (params.chatId === data) navigate("/chat");
        });
        socket?.current?.emit("joinRoom", {chatId: params?.chatId, socketId: socket?.current?.id});
        return () => socket?.current?.emit("leaveRoom", {chatId: params?.chatId, socketId: socket?.current?.id});
    }, [socket.current , params.chatId]);

    useEffect(() => {
        lastMessageRef?.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return !isFetchingActiveChat && !isFetchingMessages && (
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
                    backgroundColor: alpha(theme.palette.background.default, 0.5)
                }
            }}
        >

            <Header/>

            {
                messages?.length > 0 ? (
                    <Conversations lastMessageRef={lastMessageRef}/>
                ) : (
                    <EmptyPlaceholder/>
                )
            }

            {
                messages?.length > 20 && (
                    <ActionButton lastMessageRef={lastMessageRef}/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "imagePreview") && (
                    <ImagePreviewModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "musicPlayer") && (
                    <MusicPlayerModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "videoPlayer") && (
                    <VideoPlayerModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "forwardChat") && (
                    <ForwardChatModal/>
                )
            }

            {
                Boolean(popup?.isOpen && popup?.type === "replyChat") && (
                    <ReplyChatPopup/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "deleteChat") && (
                    <DeleteChatModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "deleteContact") && (
                    <DeleteContactModal/>
                )
            }

            <Footer/>

        </Stack>
    )
}

export default PrivateRouteHoc(ChatPage);