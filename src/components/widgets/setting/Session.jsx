// libraries
import {Box, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";

// assets
import avatar from "@/assets/images/avatar.png";

const sessions = [
    {id: 1, platform: "desktop", browser: 'chrome 113', country: "iran", city: "tehran", createDate: "1400/1/1 | 11:11"},
    {id: 2, platform: "mobile", browser: 'chrome 113', country: "iran", city: "tehran", createDate: "1400/1/1 | 11:11"},
    {id: 3, platform: "mobile", browser: 'chrome 112', country: "turkey", city: "stanbul", createDate: "1400/1/1 | 11:11"},
];

const SessionItem = ({sessionItem}) => {

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
                    width: 48,
                    height: 48,
                    bgcolor: "secondary.main",
                    color: "ternary.main",
                    borderRadius: 1,
                }}
            >
                {sessionItem.platform === "mobile" ? <LuSmartphone size={24}/> : <LuMonitor size={24}/>}
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

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <LazyLoadImage
                        src={avatar}
                        alt="browser"
                        width={20}
                        height={20}
                        style={{borderRadius: "50%"}}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {sessionItem.browser}
                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <LazyLoadImage
                        src={avatar}
                        alt="browser"
                        width={20}
                        height={20}
                        style={{borderRadius: "50%"}}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {sessionItem.city} , {sessionItem.country}
                    </Typography>

                </Stack>

            </Stack>

            <Typography
                variant="caption"
                color="textPrimary"
                sx={{marginLeft: "auto"}}
            >
                {sessionItem.createDate}
            </Typography>

        </Stack>
    )
}

const SessionList = ({sessionList}) => {

    return(
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
                sessionList?.map(sessionItem =>
                    <SessionItem
                        key={sessionItem.id}
                        sessionItem={sessionItem}
                    />
                )
            }

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
                padding: 2,
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

            <SessionItem sessionItem={sessions[0]}/>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
                sx={{marginTop: 2}}
            >
                {t("typography.otherDevices")}
            </Typography>

            <SessionList sessionList={sessions.slice(1,3)}/>

        </Stack>
    )
}

export default Session;

