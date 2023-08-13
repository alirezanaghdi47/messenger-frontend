// libraries
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "@/components/layouts/Primary.jsx";
import ActionButton from "@/components/widgets/story/ActionButton.jsx";
import Contacts from "@/components/widgets/story/Contacts.jsx";
import SearchBar from "@/components/widgets/story/Searchbar.jsx";

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
            }}
        >

        </Stack>
    )
}

const Story = () => {

    return (
        <Primary>

            <Sidebar/>

            <Main/>

        </Primary>
    )
}

export default Story;