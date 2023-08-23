// libraries
import {Box, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";

// assets
import avatar from "../../../assets/images/avatar.png";

const sessions = [
    {id: 1, platform: "desktop", browser: 'chrome 113', country: "iran", city: "tehran", createDate: "1400/1/1 | 11:11"},
    {id: 2, platform: "mobile", browser: 'chrome 113', country: "iran", city: "tehran", createDate: "1400/1/1 | 11:11"},
    {id: 3, platform: "mobile", browser: 'chrome 112', country: "turkey", city: "stanbul", createDate: "1400/1/1 | 11:11"},
];

const LogItem = ({logItem}) => {

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
                {logItem.platform === "mobile" ? <LuSmartphone size={24}/> : <LuMonitor size={24}/>}
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
                        {logItem.browser}
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
                        {logItem.city} , {logItem.country}
                    </Typography>

                </Stack>

            </Stack>

            <Typography
                variant="caption"
                color="textPrimary"
                sx={{marginLeft: "auto"}}
            >
                {logItem.createDate}
            </Typography>

        </Stack>
    )
}

const LogList = ({logList}) => {

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
                logList?.map(logItem =>
                    <LogItem
                        key={logItem.id}
                        logItem={logItem}
                    />
                )
            }

        </Stack>
    )
}

const Logs = () => {

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

            <LogItem logItem={sessions[0]}/>

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
                sx={{marginTop: 2}}
            >
                {t("typography.otherDevices")}
            </Typography>

            <LogList logList={sessions.slice(1,3)}/>

        </Stack>
    )
}

export default Logs;

