// libraries
import {Outlet, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {useMediaQuery} from "@react-hooks-library/core";
import {Stack} from "@mui/material";

// components
import Primary from "components/layouts/Primary.jsx";
import Appbar from "components/widgets/setting/Appbar.jsx";
import Version from "components/widgets/setting/Version.jsx";
import Links from "components/widgets/setting/Links.jsx";
import UserInfo from "components/widgets/setting/UserInfo.jsx";

// utils
import {slideInRightVariants} from "utils/constants";

const pathList = ["/setting/profile", "/setting/appearance", "/setting/session"];

const Setting = () => {

    const location = useLocation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Primary>

            {
                ((!pathList.includes(location.pathname) && isTablet) || !isTablet) && (
                    <Stack
                        component={motion.div}
                        variants={slideInRightVariants}
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

            <Outlet/>

        </Primary>
    )
}

export default Setting;