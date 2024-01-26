// libraries
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Stack, Typography, useTheme} from "@mui/material";
import {LuPalette, LuUser} from "react-icons/lu";

const navbarList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <LuUser size={20}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
];

const NavbarItem = ({navbarItem}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Stack
            component="li"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                bgcolor: location.pathname === "/setting/" + navbarItem.value && "primary.main",
                color: location.pathname === "/setting/" + navbarItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary",
                borderRadius: 1,
                padding: 1.5,
                cursor: "pointer"
            }}
            onClick={() => navigate(`/setting/${navbarItem.value}`)}
        >

            {navbarItem.icon}

            <Typography
                variant="subtitle2"
                color={location.pathname === "/setting/" + navbarItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                fontWeight='bold'
                noWrap
            >
                {t(navbarItem.title)}
            </Typography>

        </Stack>
    )
}

const Navbar = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
            }}
        >

            {
                navbarList.map(navbarItem =>
                    <NavbarItem
                        key={navbarItem.id}
                        navbarItem={navbarItem}
                    />
                )
            }

        </Stack>
    )
}

export default Navbar;
