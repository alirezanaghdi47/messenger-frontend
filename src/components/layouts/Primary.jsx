// libraries
import {useSelector} from "react-redux";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

// components
import Appbar from "@/components/partials/Appbar.jsx";
import Navbar from "@/components/partials/Navbar.jsx";

const Primary = ({children}) => {

    const {activeChat} = useSelector(state => state.chat);
    const {activeCall: activeCall1} = useSelector(state => state.voiceCall);
    const {activeCall: activeCall2} = useSelector(state => state.videoCall);
    const {activeSetting} = useSelector(state => state.setting);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    const activePage = Boolean(activeChat || activeCall1 || activeCall2 || activeSetting);

    return (
        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction={isMobile ? "column" : "row"}
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

                {((!activePage && !isMobile) || !isDesktop) && <Navbar/>}

                {children}

                {isMobile && !activePage && <Appbar/>}

            </Stack>

        </Container>
    )
}

export default Primary;

