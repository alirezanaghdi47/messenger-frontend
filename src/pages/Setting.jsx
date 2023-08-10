// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import UserInfo from "@/components/widgets/setting/UserInfo.jsx";
import Version from "@/components/widgets/setting/Version.jsx";
import Links from "@/components/widgets/setting/Links.jsx";
import Appearance from "@/components/widgets/setting/Appearance.jsx";
import Header from "@/components/widgets/setting/Header.jsx";

// stores
import {removeActiveSetting} from "@/stores/slices/setting.js";
import Profile from "@/components/widgets/setting/Profile.jsx";
import Notification from "@/components/widgets/setting/Notification.jsx";
import Session from "@/components/widgets/setting/Session.jsx";

const Sidebar = () => {

    const {activeSetting} = useSelector(state => state.setting);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeSetting && isDesktop) || !isDesktop) && (
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
                justifyContent: "space-between",
                alignItems: "center",
                width: isMobile ? "100%" : isDesktop ? "calc(100% - 100px)" : 360,
                height: isMobile ? "calc(100dvh - 80px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <UserInfo/>

            <Links/>

            <Version/>

        </Stack>
    )
}

const Main = () => {

    const {activeSetting} = useSelector(state => state.setting);
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return activeSetting && (
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
            }}
        >

            <Header/>

            {activeSetting === "profile" && <Profile/>}
            {activeSetting === "appearance" && <Appearance/>}
            {activeSetting === "notification" && <Notification/>}
            {activeSetting === "session" && <Session/>}

        </Stack>
    )
}

const Setting = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(removeActiveSetting());
    } , []);

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default Setting;