// libraries
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";
import {FiLogOut} from "react-icons/fi";
import {LuMonitor, LuPalette, LuUser} from "react-icons/lu";

// stores
import {setActiveSetting} from "@/stores/slices/setting.js";

const linkList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <LuUser size={24}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={24}/>},
    {id: 3, title: "menu.session", value: "session", icon: <LuMonitor size={24}/>},
    {id: 4, title: "menu.logout", value: "logout", icon: <FiLogOut size={24}/>},
];

const Links = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
                marginTop: 4,
                marginBottom: 4,
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
                            color: "ternary.main",
                            cursor: "pointer"
                        }}
                        onClick={() => dispatch(setActiveSetting(linkItem.value))}
                    >

                        {linkItem.icon}

                        <Stack
                            key={linkItem.id}
                            direction="column"
                            gap={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                width: "100%",
                            }}
                        >

                            <Typography
                                variant="subtitle2"
                                color="textPrimary"
                                fontWeight='bold'
                                noWrap
                            >
                                {t(linkItem.title)}
                            </Typography>

                        </Stack>

                    </Stack>
                )
            }

        </Stack>
    )
}

export default Links;
