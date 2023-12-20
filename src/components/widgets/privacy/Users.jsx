// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, IconButton, Stack, Typography, useMediaQuery , useTheme} from "@mui/material";
import {LuTrash2} from "react-icons/lu";

const contactList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const ContactItem = ({contactItem}) => {

    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingY: 2,
                "&:last-of-type":{
                    borderBottom: "none"
                }
            }}
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
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <LazyLoadImage
                    src="/images/avatar.jpg"
                    alt="avatar"
                    visibleByDefault
                    width={40}
                    height={40}
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

const Users = ({blockUsers}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="ul"
            direction="column"
            className="custom-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: isTablet ? "calc(100dvh - 200px)" : 480,
                overflowY: "scroll"
            }}
        >

            {
                contactList.map(contactItem =>
                    <ContactItem
                        key={contactItem?._id}
                        contactItem={contactItem}
                    />
                )
            }

        </Stack>
    )
}

export default Users;

