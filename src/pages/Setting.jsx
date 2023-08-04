// libraries
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import UserInfo from "@/components/widgets/setting/UserInfo.jsx";
import Version from "@/components/widgets/setting/Version.jsx";
import Navbar from "@/components/widgets/setting/Navbar.jsx";

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
                justifyContent: "space-between",
                alignItems: "center",
                width: isMobile ? "100%" : isTablet ? "calc(100% - 100px)" : 300,
                height: isMobile ? "calc(100dvh - 140px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <UserInfo/>

            <Navbar/>

            <Version/>

        </Stack>
    )
}

const Main = () => {

    const {activeChat} = useSelector(state => state.chat);
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
            }}
        >

        </Stack>
    )
}

const Setting = () => {

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default Setting;