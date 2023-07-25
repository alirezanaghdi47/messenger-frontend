// libraries
import {useSelector} from "react-redux";
import {Stack} from "@mui/material";
import {useMediaQuery} from "@react-hooks-library/core";

// components
import Messages from "@/components/widgets/home/Messages.jsx";
import Contacts from "@/components/widgets/home/Contacts.jsx";
import AppBar from "@/components/widgets/home/AppBar.jsx";
import SendBar from "@/components/widgets/home/SendBar.jsx";

// layouts
import Primary from "@/layouts/Primary.jsx";
import Header from "@/components/widgets/home/Header.jsx";
import SearchBar from "@/components/widgets/home/SearchBar.jsx";
import ActionBar from "@/components/widgets/home/ActionBar.jsx";

const Home = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            {
                !(isTablet && activeChat._id) && (
                    <Stack
                        component="aside"
                        direction="column"
                        gap={2}
                        sx={{
                            zIndex: "100",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            width: isTablet ? "100%" : 300,
                            height: "100%",
                            minHeight: "100vh",
                            bgcolor: "background.paper",
                            boxShadow: 1,
                            padding: 2
                        }}
                    >

                        <Header/>

                        <SearchBar/>

                        <Contacts/>

                        <ActionBar/>

                    </Stack>
                )
            }

            {
                activeChat._id && (
                    <Stack
                        direction="column"
                        sx={{
                            display: 'flex',
                            justifyContent: "start",
                            alignItems: "center",
                            width: isTablet ? "100%" : "calc(100% - 300px)",
                            height: "100vh"
                        }}
                    >

                        <AppBar/>

                        <Messages/>

                        <SendBar/>

                    </Stack>
                )
            }

            {
                !isTablet && !activeChat._id && (
                    <>
                    </>
                )
            }

        </Primary>
    )
}

export default Home;