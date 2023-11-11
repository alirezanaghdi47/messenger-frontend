// libraries
import {useLayoutEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Box, Stack , useMediaQuery} from "@mui/material";

// components
import Secondary from "layouts/Secondary.jsx";
import Appbar from "components/widgets/auth/Appbar.jsx";
import Version from "components/widgets/auth/Version";

const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {background} = useSelector(state => state.setting.appearance);
    const isDesktop = useMediaQuery('(max-width: 992px)');
    const isTablet = useMediaQuery('(max-width: 768px)');

    useLayoutEffect(() => {
        if (location.pathname === "/auth") navigate("/auth/sign-in");
    }, []);

    return (
        <Secondary>

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

                <Outlet/>

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

        </Secondary>
    )
}

export default Auth;