// libraries
import {useTranslation} from "react-i18next";
import SimpleBar from "simplebar-react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Chip, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";

const logList = [
    {
        id: 1,
        platform: "desktop",
        browser: 'chrome 113',
        country: "iran",
        city: "tehran",
        createDate: "1400/1/1 | 11:11"
    },
    {id: 2, platform: "mobile", browser: 'chrome 113', country: "iran", city: "tehran", createDate: "1400/1/1 | 11:11"},
    {
        id: 3,
        platform: "mobile",
        browser: 'chrome 112',
        country: "turkey",
        city: "stanbul",
        createDate: "1400/1/1 | 11:11"
    },
];

const Logs = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : "100%"
            }}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    padding: 4,
                }}
            >

                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    fontWeight='bold'
                    sx={{marginTop: 2}}
                >
                    {t("typography.devices")}
                </Typography>

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
                        logList.map(logItem =>
                            <Stack
                                key={logItem.id}
                                direction="row"
                                gap={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "start",
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
                                    {
                                        logItem.platform === "mobile" ?
                                            <LuSmartphone size={24}/> :
                                            <LuMonitor size={24}/>
                                    }
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
                                            src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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
                                            src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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

                                <Stack
                                    direction="column"
                                    gap={1}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "end",
                                        marginLeft: "auto"
                                    }}
                                >

                                    <Chip
                                        color="success"
                                        variant="filled"
                                        size='small'
                                        label={t("typography.isOnline")}
                                    />

                                    <Typography
                                        variant="caption"
                                        color="textPrimary"
                                    >
                                        {logItem.createDate}
                                    </Typography>

                                </Stack>

                            </Stack>
                        )
                    }

                </Stack>

            </Stack>

        </SimpleBar>
    )
}

export default Logs;

