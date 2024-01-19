// libraries
import {Outlet, useLocation} from "react-router-dom";
import {Stack, useMediaQuery} from "@mui/material";

// components
import Appbar from "components/widgets/setting/Appbar.jsx";
import Version from "components/widgets/setting/Version.jsx";
import Links from "components/widgets/setting/Links.jsx";
import UserInfo from "components/widgets/setting/UserInfo.jsx";
import Empty from "components/widgets/setting/Empty";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

// layouts
import PrimaryLayout from "layouts/PrimaryLayout.jsx";

const pathList = [
    "/setting/profile",
    "/setting/appearance",
    "/setting/privacy",
];

const SettingPage = () => {

    const location = useLocation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <PrimaryLayout>

            {
                ((!pathList.includes(location.pathname) && isTablet) || !isTablet) && (
                    <Stack
                        component="main"
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

            {
                pathList.includes(location.pathname) ? (
                    <Outlet/>
                ) : (
                    <Empty/>
                )
            }

        </PrimaryLayout>
    )
}

export default PrivateRouteHoc(SettingPage);