// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {alpha, Stack, useTheme} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Header from "@/components/widgets/videoCall/Header.jsx";
import Contacts from "@/components/widgets/videoCall/Contacts.jsx";
import SearchBar from "@/components/widgets/videoCall/Searchbar.jsx";
import Logs from "@/components/widgets/videoCall/Logs.jsx";

// stores
import {removeActiveChat} from "@/stores/slices/chat.js";

const Sidebar = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeChat && isTablet) || !isTablet) && (
        <Stack
            component="aside"
            direction="column"
            gap={2}
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
                height: isMobile ? "calc(100dvh - 160px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <SearchBar/>

            <Contacts/>

        </Stack>
    )
}

const Main = () => {

    const {activeChat} = useSelector(state => state.chat);
    const {background} = useSelector(state => state.user.setting);
    const theme = useTheme();
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
                "&::after":{
                    content: "''",
                    position: "fixed",
                    top: 70,
                    left: 0,
                    width: "100%",
                    height: "calc(100dvh - 70px)",
                    background: alpha(theme.palette.common.black , 0.5)
                }
            }}
        >

            <Header/>

            <Logs/>

        </Stack>
    )
}

const VideoCall = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(removeActiveChat());
    } , []);

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default VideoCall;