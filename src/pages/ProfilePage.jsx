// libraries
import {Stack , useMediaQuery} from "@mui/material";

// components
import Header from "components/widgets/setting/Header.jsx";
import Account from "components/widgets/profile/Account.jsx";

// hocs
import PrivateRouteHoc from "hocs/PrivateRouteHoc";

const ProfilePage = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="main"
            direction="column"
            sx={{
                position: 'absolute',
                zIndex: 200,
                top: 0,
                bottom: 0,
                left: isTablet ? 0 : 360,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: isTablet ? "100%" : "calc(100% - 360px)",
                height: "100dvh",
            }}
        >

            <Header title="typography.profile"/>

            <Account/>

        </Stack>
    )
}

export default PrivateRouteHoc(ProfilePage);