// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Header from "@/components/widgets/videoCall/Header.jsx";
import Contacts from "@/components/widgets/videoCall/Contacts.jsx";
import SearchBar from "@/components/widgets/videoCall/Searchbar.jsx";
import Logs from "@/components/widgets/videoCall/Logs.jsx";

// stores
import {removeActiveCall} from "@/stores/slices/videoCall.js";

const Sidebar = () => {

    const {activeCall} = useSelector(state => state.videoCall);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeCall && isDesktop) || !isDesktop) && (
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

        </Stack>
    )
}

const Main = () => {

    const {activeCall} = useSelector(state => state.videoCall);
    const {background} = useSelector(state => state.user);
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return activeCall && (
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
                backgroundImage: isDesktop ? `url(${background.mobile})` : `url(${background.desktop})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
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
        return () => dispatch(removeActiveCall());
    } , []);

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default VideoCall;