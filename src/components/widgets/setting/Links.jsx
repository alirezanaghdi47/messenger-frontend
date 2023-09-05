// libraries
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Stack, Typography, useTheme} from "@mui/material";
import {LuBell, LuPalette, LuShield, LuUser} from "react-icons/lu";

const linkList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <LuUser size={20}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
    {id: 3, title: "menu.privacy", value: "privacy", icon: <LuShield size={20}/>},
    {id: 4, title: "menu.notification", value: "notification", icon: <LuBell size={20}/>},
];

const LinkItem = ({linkItem}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();
    const theme = useTheme();

    const _handleActiveLink = (value) => navigate(`/setting/${value}`);

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
                bgcolor: location.pathname === "/setting/" + linkItem.value && "primary.main",
                color: location.pathname === "/setting/" + linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary",
                borderRadius: 1,
                padding: 1.5,
                cursor: "pointer"
            }}
            onClick={() => _handleActiveLink(linkItem.value)}
        >

            {linkItem.icon}

            <Typography
                variant="subtitle2"
                color={location.pathname === "/setting/" + linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                fontWeight='bold'
                noWrap
            >
                {t(linkItem.title)}
            </Typography>

        </Stack>
    )
}

const Links = () => {

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
                linkList.map(linkItem =>
                    <LinkItem
                        key={linkItem.id}
                        linkItem={linkItem}
                    />
                )
            }

        </Stack>
    )
}

export default Links;
