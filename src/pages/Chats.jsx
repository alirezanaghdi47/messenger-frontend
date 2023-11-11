// libraries
import {Outlet, useParams} from "react-router-dom";
import {Fade , useMediaQuery, Stack} from "@mui/material";

// components
import Primary from "layouts/Primary.jsx";
import Appbar from "components/widgets/chats/Appbar.jsx";
import Conversations from "components/widgets/chats/Conversations.jsx";
import SearchBar from "components/widgets/chats/Searchbar.jsx";
import ActionButton from "components/widgets/chats/ActionButton.jsx";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

const Chats = () => {

    const params = useParams();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            <Fade in={(!params.chatId && isTablet) || !isTablet}>

                <Stack
                    component="main"
                    direction="column"
                    gap={2}
                    sx={{
                        position: 'sticky',
                        zIndex: 300,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: isTablet ? "100%" : 360,
                        height: "100dvh",
                        bgcolor: "background.paper",
                        borderRightWidth: 1,
                        borderRightStyle: "solid",
                        borderRightColor: "secondary.main",
                        padding: 2
                    }}
                >

                    <Appbar/>

                    <SearchBar/>

                    <Conversations/>

                    {/*<EmptyPlaceholder/>*/}

                    <ActionButton/>

                </Stack>

            </Fade>

            <Outlet/>

        </Primary>
    )
}

export default Chats;