// libraries
import {useTranslation} from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Chip, Stack, Typography , useMediaQuery} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const deviceList = [
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

const DeviceItem = ({deviceItem}) => {

    const {t} = useTranslation();

    return (
        <Stack
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
                    deviceItem.platform === "mobile" ?
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
                        alt="avatar"
                        visibleByDefault
                        width={20}
                        height={20}
                        placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
                        effect='blur'
                        style={{borderRadius: "50%"}}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {deviceItem.browser}
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
                        alt="avatar"
                        visibleByDefault
                        width={20}
                        height={20}
                        placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
                        effect='blur'
                        style={{borderRadius: "50%"}}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                    >
                        {deviceItem.city} , {deviceItem.country}
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
                    {deviceItem.createDate}
                </Typography>

            </Stack>

        </Stack>
    )
}

const Devices = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            className="custom-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : 480,
                overflowY: "scroll"
            }}
        >

            {
                deviceList.map(deviceItem =>
                    <DeviceItem
                        key={deviceItem?.id}
                        deviceItem={deviceItem}
                    />
                )
            }

        </Stack>
    )
}

export default Devices;

