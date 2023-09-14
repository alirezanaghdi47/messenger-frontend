// libraries
import {useRef} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Loadable from "@loadable/component";
import {useMediaQuery} from "@react-hooks-library/core";
import {alpha, Stack, useTheme} from "@mui/material";

// components
import Header from "components/widgets/chat/Header.jsx";
import Footer from "components/widgets/chat/Footer.jsx";
import Conversations from "components/widgets/chat/Conversations.jsx";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";
const ForwardMessagePopup = Loadable(() => import("components/widgets/chat/ForwardMessagePopup"));
const ReplyMessagePopup = Loadable(() => import("components/widgets/chat/ReplyMessagePopup"));
const ForwardChatModal = Loadable(() => import("components/widgets/chat/ForwardChatModal"));
const ScrollToBottom = Loadable(() => import("components/widgets/chat/ScrollToBottom"));

const Chat = () => {

    const params = useParams();
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

            {/*<EmptyPlaceholder/>*/}

            {/*<ScrollToBottom ref={listRef}/>*/}

            {/*<ForwardChatModal/>*/}

            {/*<ForwardMessagePopup/>*/}

            {/*<ReplyMessagePopup/>*/}

            <Footer/>

        </Stack>
    )
}

export default Chat;