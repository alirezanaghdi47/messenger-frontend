// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Grid, Stack, Typography} from "@mui/material";
import {useMediaQuery} from "@react-hooks-library/core";
import {FiBell, FiLogOut, FiMessageCircle, FiMonitor, FiUser} from "react-icons/fi";
import {LuPalette} from "react-icons/lu";

// stores
import {setActiveSetting} from "@/stores/slices/setting.js";

const navbarList = [
    {id: 1, title: "menu.profile", value: "profile", icon: <FiUser size={20}/>},
    {id: 2, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
    {id: 3, title: "menu.notification", value: "notification", icon: <FiBell size={20}/>},
    {id: 4, title: "menu.session", value: "session", icon: <FiMonitor size={20}/>},
];

const Links = () => {

    const dispatch = useDispatch();
    const {activeSetting} = useSelector(state => state.setting);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <Grid
            component="ul"
            container
            spacing={4}
            sx={{width: isMobile ? "100%" : isTablet ? "75%" : "100%"}}
        >

            {
                navbarList.map(navbarItem =>
                    <Grid
                        key={navbarItem.id}
                        item
                        xs={6}
                    >

                        <Stack
                            direction="column"
                            gap={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: activeSetting === navbarItem.value ? "primary.main" : "secondary.main",
                                color: activeSetting === navbarItem.value ? "secondary.main" : "ternary.main",
                                borderRadius: 1,
                                padding: 1.5,
                                cursor: "pointer",
                            }}
                            onClick={() => dispatch(setActiveSetting(navbarItem.value))}
                        >

                            {navbarItem.icon}

                            <Typography
                                variant="body2"
                                color={activeSetting === navbarItem.value ? "secondary.main" : "ternary.main"}
                                fontWeight='bold'
                            >
                                {t(navbarItem.title)}
                            </Typography>

                        </Stack>

                    </Grid>
                )
            }

            <Grid
                item
                xs={6}
            >

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "secondary.main",
                        color: "ternary.main",
                        borderRadius: 1,
                        padding: 1.5,
                        cursor: "pointer",
                    }}
                >

                    <FiLogOut size={20}/>

                    <Typography
                        variant="body2"
                        color="ternary.main"
                        fontWeight='bold'
                    >
                        {t("menu.logout")}
                    </Typography>

                </Stack>

            </Grid>

        </Grid>
    )
}

export default Links;

