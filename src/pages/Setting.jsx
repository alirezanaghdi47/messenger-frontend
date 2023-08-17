// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Appbar from "@/components/widgets/setting/Appbar.jsx";
import Version from "@/components/widgets/setting/Version.jsx";
import Links from "@/components/widgets/setting/Links.jsx";
import Appearance from "@/components/widgets/setting/Appearance.jsx";
import Header from "@/components/widgets/setting/Header.jsx";
import Session from "@/components/widgets/setting/Session.jsx";
import UserInfo from "@/components/widgets/setting/UserInfo.jsx";
import Profile from "@/components/widgets/setting/Profile.jsx";

// stores
import {removeActiveSetting} from "@/stores/slices/setting.js";

const Sidebar = () => {

    const {activeSetting} = useSelector(state => state.setting);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return ((!activeSetting && isTablet) || !isTablet) && (
        <Stack
            component="aside"
            direction="column"
            gap={2}
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                left: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: isTablet ? "100%" : 360,
                height: "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Appbar/>

            <UserInfo/>

            <Links/>

            <Version/>

        </Stack>
    )
}

const Main = () => {

    const {activeSetting} = useSelector(state => state.setting);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return activeSetting && (
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
            }}
        >

            <Header/>

            {activeSetting === "profile" && <Profile/>}
            {activeSetting === "appearance" && <Appearance/>}
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