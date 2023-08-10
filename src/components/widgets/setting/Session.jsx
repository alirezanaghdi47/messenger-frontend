// libraries
import {Box, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";
import {useTranslation} from "react-i18next";

const sessions = [
    {id: 1, platform: "desktop", os: "windows 11", browser: 'chrome 113', country: "iran", ip: "192.168.1.1", createDate: "1400/1/1 | 11:11"},
    {id: 2, platform: "mobile", os: "android 13", browser: 'chrome 113', country: "iran", ip: "192.168.1.1", createDate: "1400/1/1 | 11:11"},
    {id: 3, platform: "mobile", os: "android 10", browser: 'chrome 112', country: "turkey", ip: "192.168.1.1", createDate: "1400/1/1 | 11:11"},
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
                    width: 80,
                    height: 80,
                    bgcolor: "secondary.main",
                    color: "ternary.main",
                    borderRadius: 1,
                }}
            >
                {session.platform === "mobile" ? <LuSmartphone size={32}/> : <LuMonitor size={32}/>}
            </Box>

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                }}
            >

                <Typography
                    variant="body1"
                    color="textPrimary"
                    noWrap
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    {session.os} , {session.browser}
                </Typography>

                <Typography
                    variant="body2"
                    color="textPrimary"
                    fontWeight="bold"
                    noWrap
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    {session.country}
                </Typography>

                <Typography
                    variant="body2"
                    color="textPrimary"
                    fontWeight="bold"
                    noWrap
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    {session.ip}
                </Typography>

            </Stack>

            <Typography
                variant="caption"
                color="textPrimary"
                fontWeight="bold"
                sx={{marginLeft: "auto"}}
            >
                1400/1/1 | 14:00
            </Typography>

        </Stack>
    )
}

const Session = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
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

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
            >
                {t("typography.thisDevice")}
            </Typography>

            <SessionItem session={sessions[0]}/>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
                sx={{marginTop: 2}}
            >
                {t("typography.otherDevices")}
            </Typography>

            <Stack
                direction="column"
                gap={4}
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
    )
}

export default Session;

