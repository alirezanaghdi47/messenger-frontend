// libraries
import {useSelector} from "react-redux";
import {useOrientation} from "@uidotdev/usehooks";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Stack} from "@mui/material";

// components
import Orientation from "components/partials/Orientation";
import Appbar from "../components/widgets/auth/Appbar";
import Version from "../components/widgets/auth/Version";

const Ternary = ({children}) => {

    const {angle, type} = useOrientation();
    const {background} = useSelector(state => state.setting.appearance);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isOriented = angle === 90 && type === "landscape-primary";

    return !isOriented ? (

        <Stack
            direction="row"
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
            <Stack
                component="main"
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: isTablet ? "100%" : isDesktop ? 360 : 480,
                    height: "100dvh",
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    padding: 4
                }}
            >

                <Appbar/>

                {children}

                <Version/>

            </Stack>

            {
                !isTablet && (
                    <Box
                        component="aside"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: isTablet ? 0 : isDesktop ? "calc(100% - 360px)" : "calc(100% - 480px)",
                            height: "100dvh",
                            backgroundImage: `url(${background})`,
                            backgroundPosition: 'center',
                            backgroundSize: "cover",
                            padding: 4
                        }}
                    />
                )
            }

        </Stack>

    ) : <Orientation/>

}

export default Ternary;

