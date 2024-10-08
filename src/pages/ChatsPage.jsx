// libraries
import {Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMediaQuery, Stack} from "@mui/material";

// components
import Header from "components/widgets/chats/Header.jsx";
import Chats from "components/widgets/chats/Chats.jsx";
import ChatsSearchbar from "components/widgets/chats/ChatsSearchbar.jsx";
import ActionButton from "components/widgets/chats/ActionButton.jsx";
import NoData from "components/partials/NoData";
import Empty from "components/widgets/chats/Empty";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

// layouts
import PrimaryLayout from "layouts/PrimaryLayout.jsx";

// stores
import {useGetAllChatQuery} from "stores/apis/chatApi";

const ChatsPage = () => {

    const params = useParams();
    const {chats, filteredChats} = useSelector(state => state.chat);
    useGetAllChatQuery();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <PrimaryLayout>

            {
                ((!params.chatId && isTablet) || !isTablet) && (
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

                        <Header/>

                        <ChatsSearchbar/>

                        {
                            (filteredChats.length > 0 || chats.length > 0) ? (
                                <Chats/>
                            ) : (
                                <NoData/>
                            )
                        }

                        <ActionButton/>

                    </Stack>
                )
            }

            {
                params.chatId ? (
                    <Outlet/>
                ) : (
                    <Empty/>
                )
            }

        </PrimaryLayout>
    )
}

export default PrivateRouteHoc(ChatsPage);