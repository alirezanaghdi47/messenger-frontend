// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Stack, Typography, useTheme} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

// stores
import {setActiveChat} from "@/stores/slices/chat.js";

const userList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
];

const ContactItem = ({user}) => {

    const dispatch = useDispatch();
    const {activeChat} = useSelector(state => state.chat);
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => dispatch(setActiveChat(user))}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: activeChat?._id === user._id && "primary.main",
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: 1,
                    padding: 1,
                    textDecoration: 'none'
                }}
            >

                <Badge
                    color="success"
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
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

                <Stack
                    direction="column"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "calc(100% - 72px)",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        noWrap
                        sx={{width: "100%", overflow: "hidden"}}
                    >
                        علیرضا نقدی
                    </Typography>

                    <Typography
                        variant="caption"
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11
                    </Typography>

                </Stack>

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

