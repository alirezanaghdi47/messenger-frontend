// libraries
import {Outlet, useParams} from "react-router-dom";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "../../components/layouts/Primary.jsx";
import Appbar from "../../components/widgets/home/Appbar.jsx";
import Contacts from "../../components/widgets/home/Contacts.jsx";
import SearchBar from "../../components/widgets/home/Searchbar.jsx";
import ActionButton from "../../components/widgets/home/ActionButton.jsx";

const Home = () => {

    const params = useParams();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            {
                ((!params.chatId && isTablet) || !isTablet) && (
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

            <Outlet/>

        </Primary>
    )
}

export default Home;