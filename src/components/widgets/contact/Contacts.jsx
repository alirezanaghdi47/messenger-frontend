// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Stack, Typography} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

const userList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
    {_id: "6"},
];

const ContactItem = ({user}) => {

    const {t} = useTranslation();

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                cursor: "pointer",
            }}
            onClick={() => console.log("show user modal")}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    // bgcolor: activeChat?._id === user._id && "primary.main",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none'
                }}
            >

                <Badge
                    color="success"
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >

                    <LazyLoadImage
                        src={avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />

                </Badge>

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    // color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    fontWeight='bold'
                    className="text-truncate"
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textPrimary"
                    // color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    className="text-truncate"
                    sx={{marginLeft: "auto"}}
                >
                    2 ماه {t("typography.ago")} {t("typography.registerDate")}
                </Typography>

            </Stack>

        </Box>
    )
}

const Contacts = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 150px)",
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                userList.map(userItem =>
                    <ContactItem
                        key={userItem._id}
                        user={userItem}
                    />
                )
            }

        </Stack>
    )
}

export default Contacts;

