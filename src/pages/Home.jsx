// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import Appbar from "@/components/widgets/home/Appbar.jsx";
import Header from "@/components/widgets/home/Header.jsx";
import Contacts from "@/components/widgets/home/Contacts.jsx";
import Footer from "@/components/widgets/home/Footer.jsx";
import Messages from "@/components/widgets/home/Messages.jsx";
import SearchBar from "@/components/widgets/home/Searchbar.jsx";
import ActionButton from "@/components/widgets/home/ActionButton.jsx";
import ScrollToBottom from "@/components/widgets/home/ScrollToBottom.jsx";

// stores
import {removeActiveChat} from "@/stores/slices/chat.js";

const Sidebar = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return ((!activeChat && isTablet) || !isTablet) && (
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

            <SearchBar/>

            <Contacts/>

            <ActionButton/>

        </Stack>
    )
}

const Main = () => {

    const {activeChat} = useSelector(state => state.chat);
    const {background} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return activeChat && (
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

            <Messages/>

            <ScrollToBottom/>

            <Footer/>

        </Stack>
    )
}

const Home = () => {

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

export default Home;