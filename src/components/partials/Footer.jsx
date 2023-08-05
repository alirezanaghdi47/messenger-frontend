// libraries
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Stack, Typography , Badge} from "@mui/material";
import {FiMessageCircle, FiPhone, FiVideo} from "react-icons/fi";
import {LuContact, LuDisc, LuSettings} from "react-icons/lu";

const footerLinks = [
    {id: 1, title: "list.chat", href: "/chat", icon: <FiMessageCircle size={20}/>},
    {id: 2, title: "list.voiceCall", href: "/voice-call", icon: <FiPhone size={20}/>},
    {id: 3, title: "list.videoCall", href: "/video-call", icon: <FiVideo size={20}/>},
    {id: 4, title: "list.status", href: "/status", icon: <LuDisc size={20}/>},
    {id: 5, title: "list.contact", href: "/contact", icon: <LuContact size={20}/>},
    {id: 6, title: "list.setting", href: "/setting", icon: <LuSettings size={20}/>},
];

const Footer = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <Stack
            component="footer"
            direction="row"
            gap={1}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                width: "100%",
                height: 90,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <Stack
                component="ul"
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                {
                    footerLinks.map(footerLink =>
                        <Stack
                            key={footerLink.id}
                            component="li"
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "20%",
                                color: location.pathname === footerLink.href ? "primary.main" : "ternary.main",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(footerLink.href)}
                        >

                            {/*<Badge*/}
                            {/*    color="error"*/}
                            {/*    variant="standard"*/}
                            {/*    overlap="rectangular"*/}
                            {/*    anchorOrigin={{*/}
                            {/*        vertical: 'top',*/}
                            {/*        horizontal: 'left',*/}
                            {/*    }}*/}
                            {/*    badgeContent={100}*/}
                            {/*    max={9}*/}
                            {/*>*/}
                                {footerLink.icon}
                            {/*</Badge>*/}

                            <Typography
                                variant="caption"
                                color={location.pathname === footerLink.href ? "primary" : "ternary"}
                                fontWeight="bold"
                                textAlign="center"
                                lineHeight={1.5}
                            >
                                {t(footerLink.title)}
                            </Typography>

                        </Stack>
                    )
                }

            </Stack>

        </Stack>
    )
}

export default Footer;

