// libraries
import {useTranslation} from "react-i18next";
import {Stack, Typography} from "@mui/material";
import {FiLogOut, FiMessageCircle, FiMonitor, FiUser} from "react-icons/fi";
import {LuPalette} from "react-icons/lu";

const navbarList = [
    {id: 1 , title: "menu.profile" , value: "profile" , icon: <FiUser size={20}/>},
    {id: 2 , title: "menu.chat" , value: "chat" , icon: <FiMessageCircle size={20}/>},
    {id: 3 , title: "menu.personalization" , value: "personalization" , icon: <LuPalette size={20}/>},
    {id: 4 , title: "menu.session" , value: "session" , icon: <FiMonitor size={20}/>},
]

const Navbar = () => {

    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                navbarList.map(navbarItem =>
                    <Stack
                        key={navbarItem.id}
                        direction="row"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            width: "100%",
                            color: "text.secondary",
                            padding: 1.5,
                            cursor: "pointer",
                        }}
                        onClick={() => console.log(navbarItem.value)}
                    >

                        {navbarItem.icon}

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            fontWeight='bold'
                        >
                            {t(navbarItem.title)}
                        </Typography>

                    </Stack>
                )
            }

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: "error.main",
                    padding: 1.5,
                    cursor: "pointer"
                }}
            >

                <FiLogOut size={20}/>

                <Typography
                    variant="body2"
                    color="error"
                    fontWeight='bold'
                >
                    {t("menu.logout")}
                </Typography>

            </Stack>

        </Stack>
    )
}

export default Navbar;

