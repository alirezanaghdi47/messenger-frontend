// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Stack, Typography, useTheme} from "@mui/material";
import {FiLogOut} from "react-icons/fi";
import {LuMonitor, LuPalette, LuUser} from "react-icons/lu";

// stores
import {setActiveSetting} from "@/stores/slices/setting.js";

const linkList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <LuUser size={20}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
    {id: 3, title: "menu.session", value: "session", icon: <LuMonitor size={20}/>},
];

const Links = () => {

    const dispatch = useDispatch();
    const {activeSetting} = useSelector(state => state.setting);
    const {t} = useTranslation();
    const theme = useTheme();

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
                    <Stack
                        key={linkItem.id}
                        component="li"
                        direction="row"
                        gap={2}
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            width: "100%",
                            bgcolor: activeSetting === linkItem.value && "primary.main",
                            color: activeSetting === linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary",
                            borderRadius: 1,
                            padding: 1.5,
                            cursor: "pointer"
                        }}
                        onClick={() => dispatch(setActiveSetting(linkItem.value))}
                    >

                        {linkItem.icon}

                        <Typography
                            variant="subtitle2"
                            color={activeSetting === linkItem.value ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            fontWeight='bold'
                            noWrap
                        >
                            {t(linkItem.title)}
                        </Typography>

                    </Stack>
                )
            }

        </Stack>
    )
}

export default Links;
