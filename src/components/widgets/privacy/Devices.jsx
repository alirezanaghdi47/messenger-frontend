// libraries
import {useCallback, useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {VariableSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {useMediaQuery} from "@react-hooks-library/core";
import {AsyncImage} from "loadable-image";
import {Box, Chip, Stack, Typography} from "@mui/material";
import {LuMonitor, LuSmartphone} from "react-icons/lu";

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

const DeviceItem = ({deviceItem , index , setSize}) => {

    const {t} = useTranslation();

    const rowRef = useRef();

    useEffect(() => {
        setSize(index, rowRef.current.getBoundingClientRect().height);
    }, [setSize, index]);

    return (
        <Stack
            ref={rowRef}
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

                    <AsyncImage
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                        alt="browser"
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                        }}
                        loader={<Box sx={{ bgcolor: "ternary.main" }}/>}
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

                    <AsyncImage
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                        alt="browser"
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                        }}
                        loader={<Box sx={{ bgcolor: "ternary.main" }}/>}
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

    const listRef = useRef();
    const sizeMap = useRef({});
    const {language} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    const setSize = useCallback((index, size) => {
        sizeMap.current = {...sizeMap.current, [index]: size};
        listRef.current.resetAfterIndex(index);
    }, []);

    const getSize = index => sizeMap.current[index] + 32 || 100 + 32;

    return (
        <AutoSizer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 80px)" : 480
            }}
        >
            {
                ({height, width}) => (
                    <List
                        ref={listRef}
                        direction={language === "fa" ? "rtl" : "ltr"}
                        width={width}
                        height={height}
                        itemCount={deviceList.length}
                        itemSize={getSize}
                        className="remove-scrollbar"
                    >
                        {
                            ({index, style}) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        ...style,
                                    }}
                                >
                                    <DeviceItem
                                        index={index}
                                        deviceItem={deviceList[index]}
                                        setSize={setSize}
                                    />
                                </div>
                            )
                        }
                    </List>
                )
            }
        </AutoSizer>
    )
}

export default Devices;

