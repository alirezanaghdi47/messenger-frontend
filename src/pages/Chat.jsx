// libraries
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Header from "../components/widgets/chat/Header.jsx";
import Footer from "../components/widgets/chat/Footer.jsx";
import Conversations from "../components/widgets/chat/Conversations.jsx";
import ScrollToBottom from "../components/widgets/chat/ScrollToBottom.jsx";
import Empty from "../components/partials/Empty";

const Chat = () => {

    const params = useParams();
    const {background} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

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
            }}
        >

            <Header/>

            <Conversations/>

            {/*<Empty/>*/}

            <ScrollToBottom/>

            <Footer/>

        </Stack>
    )
}

export default Chat;