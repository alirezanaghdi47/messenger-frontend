// libraries
import {Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "components/layouts/Primary.jsx";
import Appbar from "components/widgets/chats/Appbar.jsx";
import Conversations from "components/widgets/chats/Conversations.jsx";
import SearchBar from "components/widgets/chats/Searchbar.jsx";
import AddChat from "components/widgets/chats/AddChat.jsx";
import Empty from "components/partials/Empty";

// utils
import {slideInRightVariants , slideInLeftVariants} from "utils/constants";

const Chats = () => {

    const params = useParams();
    const {language} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            {
                ((!params.chatId && isTablet) || !isTablet) && (
                    <Stack
                        component={motion.div}
                        variants={language === "fa" ? slideInRightVariants : slideInLeftVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        direction="column"
                        gap={2}
                        sx={{
                            position: 'absolute',
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

                        {/*<Empty/>*/}

                        <AddChat/>

                    </Stack>
                )
            }

            <Outlet/>

        </Primary>
    )
}

export default Chats;