// libraries
import {useTranslation} from "react-i18next";
import {Virtuoso} from "react-virtuoso";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import {LuTrash2} from "react-icons/lu";

// styles
import 'react-lazy-load-image-component/src/effects/blur.css';

const contactList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const ContactItem = ({contactItem}) => {

    const {t} = useTranslation();

    return (
        <Box
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
                    paddingBottom: 2,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <LazyLoadImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    visibleByDefault
                    width={40}
                    height={40}
                    placeholderSrc="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/placeholder.jpg"
                    effect='blur'
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

                <Stack
                    direction="column"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        marginLeft: "auto"
                    }}
                >

                    <IconButton
                        color="error"
                    >
                        <LuTrash2 size={20}/>
                    </IconButton>

                </Stack>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Virtuoso
            data={contactList}
            totalCount={contactList.length}
            itemContent={(index, contactItem) => (
                <ContactItem
                    key={index}
                    contactItem={contactItem}
                />
            )}
            className="custom-scrollbar"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 200px)" : 480,
            }}
        />
    )
}

export default Contacts;

