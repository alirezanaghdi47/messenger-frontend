// libraries
import {Box, Button, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";
import {useTranslation} from "react-i18next";
import {FiTrash} from "react-icons/fi";

const sessions = [
    {id: 1, platform: "desktop", os: "windows 11", browser: 'chrome 113', country: "iran", city: "tehran", ip: "192.168.1.1", createDate: "11:11 | 1400/1/1"},
    {id: 2, platform: "mobile", os: "android 13", browser: 'chrome 113', country: "iran", city: "tehran", ip: "192.168.1.1", createDate: "11:11 | 1400/1/1"},
    {id: 3, platform: "mobile", os: "android 10", browser: 'chrome 112', country: "turkey", city: "istanbul", ip: "192.168.1.1", createDate: "11:11 | 1400/1/1"},
];

const SessionItem = ({session}) => {

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    bgcolor: "secondary.main",
                    color: "ternary.main",
                    borderRadius: 1,
                }}
            >
                {session.platform === "mobile" ? <LuSmartphone size={20}/> : <LuMonitor size={20}/>}
            </Box>

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%"
                }}
            >

                <Typography
                    variant="body2"
                    color="textPrimary"
                    fontWeight="bold"
                    className="text-truncate"
                    sx={{width: "100%"}}
                >
                    {session.os} , {session.browser}
                </Typography>

                <Typography
                    variant="caption"
                    color="textPrimary"
                    fontWeight="bold"
                    className="text-truncate"
                    sx={{width: "100%"}}
                >
                    {session.country} , {session.city} , {session.ip}
                </Typography>

                <Typography
                    variant="caption"
                    color="textPrimary"
                    className="text-truncate"
                    sx={{width: "100%"}}
                >
                    {session.createDate}
                </Typography>

            </Stack>

        </Stack>
    )
}

const Session = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: 4,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

           <Stack
               direction="column"
               gap={2}
               sx={{
                   display: "flex",
                   justifyContent: "start",
                   alignItems: "start",
                   width: "100%",
               }}
           >

               <Typography
                   variant="subtitle2"
                   color="textPrimary"
                   fontWeight='bold'
               >
                   {t("typography.thisDevice")}
               </Typography>

               <SessionItem session={sessions[0]}/>

           </Stack>

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                }}
            >

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        width: "100%"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("typography.otherDevices")}
                    </Typography>

                    <Button
                        variant="text"
                        color="error"
                        startIcon={<FiTrash size={16}/>}
                    >
                        {t("button.deleteAll")}
                    </Button>

                </Stack>

                <Stack
                    direction="column"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    {
                        sessions.slice(1,3).map(sessionItem =>
                            <SessionItem
                                key={sessionItem.id}
                                session={sessionItem}
                            />
                        )
                    }

                </Stack>

            </Stack>

        </Stack>
    )
}

export default Session;

