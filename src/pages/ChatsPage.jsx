// libraries
import {Outlet, useParams} from "react-router-dom";
import {useMediaQuery, Stack} from "@mui/material";

// components
import Appbar from "components/widgets/chats/Appbar.jsx";
import Chats from "components/widgets/chats/Chats.jsx";
import SearchBar from "components/widgets/chats/Searchbar.jsx";
import ActionButton from "components/widgets/chats/ActionButton.jsx";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";
import Empty from "components/widgets/chats/Empty";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

// layouts
import PrimaryLayout from "layouts/PrimaryLayout.jsx";

// stores
import {useGetAllChatQuery} from "stores/apis/chatApi";

const ChatsPage = () => {

    const params = useParams();
    const {data, error, isLoading} = useGetAllChatQuery();
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

                        <Appbar/>

                        <SearchBar/>

                        {
                            !isLoading && !error && data.length > 0 ? (
                                <Chats chats={data}/>
                            ) : (
                                <EmptyPlaceholder/>
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