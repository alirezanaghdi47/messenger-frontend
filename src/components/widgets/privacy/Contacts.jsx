// libraries
import {useCallback, useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {VariableSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Stack, Typography} from "@mui/material";

const contactList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const ContactItem = ({contactItem , index , setSize}) => {

    const rowRef = useRef();
    const {t} = useTranslation();

    useEffect(() => {
        setSize(index, rowRef.current.getBoundingClientRect().height);
    }, [setSize, index]);

    return (
        <Box
            ref={rowRef}
            component="li"
            sx={{width: "100%"}}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <img
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    width={40}
                    height={40}
                    style={{borderRadius: "50%"}}
                />

                <Stack
                    direction="column"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                        noWrap
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        noWrap
                    >
                        {t("typography.lastSeen")}
                        &nbsp;
                        11:11
                    </Typography>

                </Stack>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    const listRef = useRef();
    const sizeMap = useRef({});
    const {language} = useSelector(state => state.setting.appearance);
    const isTablet = useMediaQuery('(max-width: 768px)');

    const setSize = useCallback((index, size) => {
        sizeMap.current = {...sizeMap.current, [index]: size};
        listRef.current.resetAfterIndex(index);
    }, []);

    const getSize = index => sizeMap.current[index] || 100;

    return (
        <AutoSizer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 200px)" : 480,
            }}
        >
            {
                ({height, width}) => (
                    <List
                        ref={listRef}
                        direction={language === "fa" ? "rtl" : "ltr"}
                        width={width}
                        height={height}
                        itemCount={contactList.length}
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
                                    <ContactItem
                                        index={index}
                                        contactItem={contactList[index]}
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

export default Contacts;

