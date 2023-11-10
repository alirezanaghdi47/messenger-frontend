// libraries
import {useSelector} from "react-redux";
import {useOrientation} from "@uidotdev/usehooks";
import {useMediaQuery} from "@react-hooks-library/core";
import {Container, Stack} from "@mui/material";

// components
import Orientation from "components/partials/Orientation";
import Appbar from "components/widgets/setting/Appbar";
import Version from "components/widgets/setting/Version";
import UserInfo from "components/widgets/setting/UserInfo";
import Links from "components/widgets/setting/Links";

const childrenList = ["profile", "appearance", "privacy"];

const Secondary = ({children}) => {

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
                    height: "100%",
                    minHeight: "100dvh",
                }}
            >

                {
                    ((!childrenList.includes(page.active) && isTablet) || !isTablet) && (
                        <Stack
                            component="aside"
                            direction="column"
                            gap={4}
                            sx={{
                                position: 'sticky',
                                zIndex: 300,
                                top: 0,
                                left: 0,
                                bottom: 0,
                                display: "flex",
                                justifyContent: "space-between",
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

                            <UserInfo/>

                            <Links/>

                            <Version/>

                        </Stack>
                    )
                }

                {children}

            </Stack>

        </Container>

    ) : <Orientation/>
}

export default Secondary;

