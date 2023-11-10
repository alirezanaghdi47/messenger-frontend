// libraries
import {useSelector} from "react-redux";
import {useOrientation} from "@uidotdev/usehooks";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

// components
import Orientation from "components/partials/Orientation";
import Appbar from "components/widgets/chats/Appbar.jsx";
import SearchBar from "components/widgets/chats/Searchbar.jsx";
import Conversations from "components/widgets/chats/Conversations.jsx";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";
import ActionButton from "components/widgets/chats/ActionButton.jsx";

const childrenList = ["chat"];

const Primary = ({children}) => {

    const {angle, type} = useOrientation();
    const {page} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isOriented = angle === 90 && type === "landscape-primary";

    return !isOriented ? (

        <Container
            maxWidth="xl"
            disableGutters
        >

            <Stack
                direction="column"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    height: "100dvh",
                }}
            >

                {
                    ((!childrenList.includes(page.active) && isTablet) || !isTablet) && (
                        <Stack
                            component="aside"
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
                                minHeight: "100dvh",
                                height: "100%",
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
                    )
                }

                {children}

            </Stack>

        </Container>

    ) : <Orientation/>
}

export default Primary;

