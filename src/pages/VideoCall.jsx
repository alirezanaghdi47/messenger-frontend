// libraries
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Actionbar from "@/components/widgets/chat/Actionbar.jsx";
import Header from "@/components/widgets/chat/Header.jsx";
import Contacts from "@/components/widgets/chat/Contacts.jsx";
import Footer from "@/components/widgets/chat/Footer.jsx";
import Messages from "@/components/widgets/chat/Messages.jsx";
import SearchBar from "@/components/widgets/chat/Searchbar.jsx";

const Sidebar = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeChat && isTablet) || !isTablet) && (
        <Stack
            component="aside"
            direction="column"
            gap={1}
            sx={{
                position: 'fixed',
                top: isMobile ? 70 : 0,
                left: isMobile ? 0 : 100,
                bottom: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isMobile ? "100%" : isTablet ? "calc(100% - 100px)" : 300,
                height: isMobile ? "calc(100dvh - 140px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <SearchBar/>

            <Contacts/>

            <Actionbar/>

        </Stack>
    )
}

const Main = () => {

    const {activeChat} = useSelector(state => state.chat);
    const {background} = useSelector(state => state.user.setting);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return activeChat && (
        <Stack
            component="main"
            direction="column"
            sx={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: isTablet ? 0 : 400,
                zIndex: activeChat && isTablet ? 150 : 0,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 400px)",
                height: "100dvh",
                backgroundImage: isTablet ? `url(${background.mobile})` : `url(${background.desktop})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
            }}
        >

            <Header/>

            <Messages/>

            <Footer/>

        </Stack>
    )
}

const VideoCall = () => {

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default VideoCall;