// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Header from "@/components/widgets/chat/Header.jsx";
import Contacts from "@/components/widgets/chat/Contacts.jsx";
import Footer from "@/components/widgets/chat/Footer.jsx";
import Messages from "@/components/widgets/chat/Messages.jsx";
import SearchBar from "@/components/widgets/chat/Searchbar.jsx";
import ActionButton from "@/components/widgets/chat/ActionButton.jsx";
import ScrollToBottom from "@/components/widgets/chat/ScrollToBottom.jsx";

// stores
import {removeActiveChat} from "@/stores/slices/chat.js";

const Sidebar = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeChat && isDesktop) || !isDesktop) && (
        <Stack
            component="aside"
            direction="column"
            gap={2}
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                left: isMobile ? 0 : 100,
                bottom: 0,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isMobile ? "100%" : isDesktop ? "calc(100% - 100px)" : 360,
                height: isMobile ? "calc(100dvh - 80px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <SearchBar/>

            <Contacts/>

            <ActionButton/>

        </Stack>
    )
}

const Main = () => {

    const {activeChat} = useSelector(state => state.chat);
    const {background} = useSelector(state => state.profile.setting);
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return activeChat && (
        <Stack
            component="main"
            direction="column"
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                bottom: 0,
                left: isDesktop ? 0 : 460,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isDesktop ? "100%" : "calc(100% - 460px)",
                height: "100dvh",
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
            }}
        >

            <Header/>

            <Messages/>

            <ScrollToBottom/>

            <Footer/>

        </Stack>
    )
}

const Chat = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(removeActiveChat());
    }, []);

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default Chat;