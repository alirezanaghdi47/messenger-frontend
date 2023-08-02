// libraries
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Searchbar from "@/components/widgets/chat/Searchbar.jsx";
import Contacts from "@/components/widgets/chat/Contacts.jsx";
import Actionbar from "@/components/widgets/chat/Actionbar.jsx";

const Form = () => {

    const {activeChat} = useSelector(state => state.chat);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return ((!activeChat && isTablet) || !isTablet) && (
        <Stack
            direction="column"
            gap={1}
            sx={{
                position: 'fixed',
                top: isMobile ? 70 : 0,
                left: isMobile ? 0 : 80,
                bottom: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isMobile ? "100%" : isTablet ? "calc(100% - 80px)" : 300,
                height: isMobile ? "calc(100dvh - 140px)" : "100dvh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Searchbar/>

            <Contacts/>

            <Actionbar/>

        </Stack>
    )
}

export default Form;