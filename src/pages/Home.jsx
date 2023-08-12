// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

// components
import Header from "@/components/widgets/Header.jsx";
import Footer from "@/components/widgets/Footer.jsx";
import Messages from "@/components/widgets/Messages.jsx";
import ScrollToBottom from "@/components/widgets/ScrollToBottom.jsx";
import Appbar from "@/components/widgets/Appbar.jsx";
import Filter from "@/components/widgets/Filter.jsx";
import Contacts from "@/components/widgets/Contacts.jsx";
import ActionButton from "@/components/widgets/ActionButton.jsx";

// stores
import {removeActiveChat} from "@/stores/slices/chat.js";
import Preview from "@/components/widgets/Preview.jsx";
import Links from "@/components/widgets/Links.jsx";
import Version from "@/components/widgets/Version.jsx";

const Home = () => {

    const dispatch = useDispatch();
    const {activeChat} = useSelector(state => state.chat);
    const {activeProfile} = useSelector(state => state.profile);
    const {background} = useSelector(state => state.profile.setting);
    const isTablet = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        return () => dispatch(removeActiveChat());
    }, []);

    return (
        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction="row"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    minHeight: "100dvh",
                }}
            >

                {
                    ((!activeChat && isTablet) || !isTablet) && (
                        <Stack
                            component="aside"
                            direction="column"
                            gap={2}
                            sx={{
                                position: 'absolute',
                                zIndex: 300,
                                top: 0,
                                left: 0,
                                bottom: 0,
                                display: "flex",
                                justifyContent: activeProfile ? "space-between" : "start",
                                alignItems: "center",
                                width: isTablet ? "100%" : 360,
                                height: "100dvh",
                                bgcolor: "background.paper",
                                boxShadow: 1,
                                padding: 2,
                                overflowY: "scroll"
                            }}
                            className="remove-scrollbar"
                        >

                            {
                                activeProfile ? (
                                    <>
                                        <Preview/>

                                        <Links/>

                                        <Version/>
                                    </>
                                ) : (
                                    <>
                                        <Appbar/>

                                        <Filter/>

                                        <Contacts/>

                                        <ActionButton/>
                                    </>
                                )
                            }

                        </Stack>
                    )
                }

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
                        backgroundImage: isTablet ? `url(${background.mobile})` : `url(${background.desktop})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                    }}
                >

                    {
                        activeChat && (
                            <>
                                <Header/>

                                <Messages/>

                                <ScrollToBottom/>

                                <Footer/>
                            </>
                        )
                    }

                </Stack>

            </Stack>

        </Container>
    )
}

export default Home;