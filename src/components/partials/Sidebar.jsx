// libraries
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Badge, Grid, Stack, Typography} from "@mui/material";
import {FiMessageCircle, FiPhone, FiSettings, FiVideo} from "react-icons/fi";
import {LuContact, LuDisc} from "react-icons/lu";
import {LazyLoadImage} from "react-lazy-load-image-component";

// assets
import logo from "@/assets/images/logo.png";

const sidebarLinks = [
    {id: 1, title: "list.chat", href: "/chat", icon: <FiMessageCircle size={20}/>},
    {id: 2, title: "list.voiceCall", href: "/voice-call", icon: <FiPhone size={20}/>},
    {id: 3, title: "list.videoCall", href: "/video-call", icon: <FiVideo size={20}/>},
    {id: 4, title: "list.contact", href: "/contact", icon: <LuContact size={20}/>},
    {id: 5, title: "list.setting", href: "/setting", icon: <FiSettings size={20}/>},
];

const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <Stack
            component="nav"
            direction="column"
            gap={1}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                height: "100vh",
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                />

                <Typography
                    variant="caption"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("domain")}
                </Typography>

            </Stack>

            <Grid
                component="ul"
                container
                spacing={2}
            >

                {
                    sidebarLinks.slice(0,4).map(sidebarLink =>
                        <Grid
                            key={sidebarLink.id}
                            component="li"
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: location.pathname === sidebarLink.href ? "primary.main" : "ternary.main",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(sidebarLink.href)}
                        >

                            <Badge
                                color="error"
                                variant="standard"
                                overlap="rectangular"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                badgeContent={100}
                                max={9}
                            >
                                {sidebarLink.icon}
                            </Badge>

                            <Typography
                                variant="caption"
                                color={location.pathname === sidebarLink.href ? "primary" : "ternary"}
                                fontWeight="bold"
                                textAlign="center"
                                lineHeight={1.5}
                            >
                                {t(sidebarLink.title)}
                            </Typography>

                        </Grid>
                    )
                }

            </Grid>

            <Grid
                component="ul"
                container
                spacing={2}
            >

                {
                    sidebarLinks.slice(-1).map(sidebarLink =>
                        <Grid
                            key={sidebarLink.id}
                            component="li"
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: location.pathname === sidebarLink.href ? "primary.main" : "ternary.main",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(sidebarLink.href)}
                        >

                            {sidebarLink.icon}

                            <Typography
                                variant="caption"
                                color={location.pathname === sidebarLink.href ? "primary" : "ternary"}
                                fontWeight="bold"
                                textAlign="center"
                                lineHeight={1.5}
                            >
                                {t(sidebarLink.title)}
                            </Typography>

                        </Grid>
                    )
                }

            </Grid>

        </Stack>
    )
}

export default Sidebar;

