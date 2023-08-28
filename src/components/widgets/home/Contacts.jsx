// libraries
import {useTranslation} from "react-i18next";
import SimpleBar from "simplebar-react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Stack, Typography} from "@mui/material";

const contactList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const Contacts = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 200px)" : 480
            }}
        >

            <Stack
                component="ul"
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >

                {
                    contactList.map(contactItem =>
                        <Box
                            key={contactItem._id}
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

                                <LazyLoadImage
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

            </Stack>

        </SimpleBar>
    )
}

export default Contacts;

