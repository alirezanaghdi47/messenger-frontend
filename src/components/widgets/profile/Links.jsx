// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Grid, Stack, Typography} from "@mui/material";
import {useMediaQuery} from "@react-hooks-library/core";
import {FiDownload, FiGrid, FiLogOut, FiMonitor, FiRotateCw, FiUser} from "react-icons/fi";
import {LuPalette} from "react-icons/lu";

// stores
import {setActiveProfile} from "@/stores/slices/profile.js";

const linkList = [
    {id: 1, title: "menu.application", value: "application", icon: <FiGrid size={20}/>},
    {id: 2, title: "menu.account", value: "account", icon: <FiUser size={20}/>},
    {id: 3, title: "menu.appearance", value: "appearance", icon: <LuPalette size={20}/>},
    {id: 4, title: "menu.session", value: "session", icon: <FiMonitor size={20}/>},
];

const actionList = [
    {id: 5, title: "menu.install", value: "install", icon: <FiDownload size={20}/>},
    {id: 6, title: "menu.update", value: "update", icon: <FiRotateCw size={20}/>},
]

const Links = () => {

    const dispatch = useDispatch();
    const {activeProfile} = useSelector(state => state.profile);
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
                linkList.map(linkItem =>
                    <Grid
                        key={linkItem.id}
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
                                bgcolor: activeProfile === linkItem.value ? "primary.main" : "secondary.main",
                                color: activeProfile === linkItem.value ? "secondary.main" : "ternary.main",
                                borderRadius: 1,
                                padding: 1.5,
                                cursor: "pointer",
                            }}
                            onClick={() => dispatch(setActiveProfile(linkItem.value))}
                        >

                            {linkItem.icon}

                            <Typography
                                variant="body2"
                                color={activeProfile === linkItem.value ? "secondary.main" : "ternary.main"}
                                fontWeight='bold'
                            >
                                {t(linkItem.title)}
                            </Typography>

                        </Stack>

                    </Grid>
                )
            }

            {
                actionList.map(actionItem =>
                    <Grid
                        key={actionItem.id}
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

                            {actionItem.icon}

                            <Typography
                                variant="body2"
                                color="ternary.main"
                                fontWeight='bold'
                            >
                                {t(actionItem.title)}
                            </Typography>

                        </Stack>

                    </Grid>
                )
            }

        </Grid>
    )
}

export default Links;

