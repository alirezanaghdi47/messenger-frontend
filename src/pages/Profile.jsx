// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Header from "@/components/widgets/profile/Header.jsx";
import Appbar from "@/components/widgets/profile/Appbar.jsx";

// stores
import {removeActiveProfile} from "@/stores/slices/profile.js";
import Links from "@/components/widgets/profile/Links.jsx";
import Version from "@/components/widgets/profile/Version.jsx";
import Appearance from "@/components/widgets/profile/Appearance.jsx";
import Account from "@/components/widgets/profile/Account.jsx";
import Session from "@/components/widgets/profile/Session.jsx";
import Application from "@/components/widgets/profile/Application.jsx";

const Sidebar = () => {

    const {activeProfile} = useSelector(state => state.profile);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return ((!activeProfile && isTablet) || !isTablet) && (
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

            <Links/>

            <Version/>

        </Stack>
    )
}

const Main = () => {

    const {activeProfile} = useSelector(state => state.profile);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return activeProfile && (
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

            {activeProfile === "application" && <Application/>}
            {activeProfile === "appearance" && <Appearance/>}
            {activeProfile === "account" && <Account/>}
            {activeProfile === "session" && <Session/>}

        </Stack>
    )
}

const Profile = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(removeActiveProfile());
    } , []);

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default Profile;