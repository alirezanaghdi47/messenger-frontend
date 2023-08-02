// libraries
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Box, Button, Stack} from "@mui/material";
import {FiMessageCircle, FiMonitor, FiUser} from "react-icons/fi";

const NavLinks = () => {

    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction='column'
            gap={1}
            sx={{width: "100%"}}
        >

            <Box component="li">

                <Button
                    component={Link}
                    to="/user/profile"
                    variant={location.pathname === "/user/profile" ? "contained" : "text"}
                    color={location.pathname === "/user/profile" ? "primary" : "secondary"}
                    fullWidth
                    startIcon={<FiUser size={20}/>}
                    sx={{justifyContent: "start"}}
                >
                    {t("button.profile")}
                </Button>

            </Box>

            <Box component="li">

                <Button
                    component={Link}
                    to="/user/settings"
                    variant={location.pathname === "/user/settings" ? "contained" : "text"}
                    color={location.pathname === "/user/settings" ? "primary" : "secondary"}
                    fullWidth
                    startIcon={<FiMessageCircle size={20}/>}
                    sx={{justifyContent: "start"}}
                >
                    {t("button.chatSettings")}
                </Button>

            </Box>

            <Box component="li">

                <Button
                    component={Link}
                    to="/user/devices"
                    variant={location.pathname === "/user/devices" ? "contained" : "text"}
                    color={location.pathname === "/user/devices" ? "primary" : "secondary"}
                    fullWidth
                    startIcon={<FiMonitor size={20}/>}
                    sx={{justifyContent: "start"}}
                >
                    {t("button.devices")}
                </Button>

            </Box>

        </Stack>
    )
}

export default NavLinks;