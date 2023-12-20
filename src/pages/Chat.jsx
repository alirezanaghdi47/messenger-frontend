// libraries
import {useRef} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Loadable from "@loadable/component";
import {alpha, Stack, useTheme , useMediaQuery} from "@mui/material";

// components
import Header from "components/widgets/chat/Header.jsx";
import Footer from "components/widgets/chat/Footer.jsx";
import Conversations from "components/widgets/chat/Conversations.jsx";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";
import ActionButton from "components/widgets/chat/ActionButton";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

const ImagePreviewModal = Loadable(() => import("components/widgets/chat/ImagePreviewModal"));
const MusicPlayerModal = Loadable(() => import("components/widgets/chat/MusicPlayerModal"));
const VideoPlayerModal = Loadable(() => import("components/widgets/chat/VideoPlayerModal"));
const ForwardChatModal = Loadable(() => import("components/widgets/chat/ForwardChatModal"));
const ReplyChatPopup = Loadable(() => import("components/widgets/chat/ReplyChatPopup"));
const DeleteChatModal = Loadable(() => import("components/widgets/chat/DeleteChatModal"));
const DeleteContactModal = Loadable(() => import("components/widgets/chat/DeleteContactModal"));

const Chat = () => {

    const params = useParams();
    const {modal , popup} = useSelector(state => state.app);
    const {background} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const theme = useTheme();
    const listRef = useRef(null);

    return params.chatId && (
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
                backgroundImage: `url(${background})`,
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
                    background: alpha(theme.palette.background.default, 0.5)
                }
            }}
        >

            <Header/>

            <Conversations ref={listRef}/>

            <ActionButton ref={listRef}/>

            {/*<EmptyPlaceholder/>*/}

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

export default PrivateRouteHoc(Chat);