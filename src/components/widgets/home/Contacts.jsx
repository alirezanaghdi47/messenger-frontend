// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Stack, Typography, useTheme} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {setActiveChat, removeActiveChat} from "@/stores/slices/chat.js";

const userList = [
    {_id: 1},
    {_id: 2},
    {_id: 3},
    {_id: 4},
    {_id: 5},
];

const ContactList = () => {

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
                        key={userItem.id}
                        user={userItem}
                    />
                )
            }

        </Stack>
    )
}

const ContactItem = ({user}) => {

    const dispatch = useDispatch();
    const {activeChat} = useSelector(state => state.chat);
    const theme = useTheme();

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                bgcolor: activeChat._id === user._id && "primary.main",
                width: "100%",
                cursor: "pointer",
                borderRadius: 1,
                padding: 1,
            }}
            onClick={
                () => activeChat._id === user._id ?
                    dispatch(removeActiveChat()) :
                    dispatch(setActiveChat({_id: user._id}))
            }
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
                    src={logo}
                    alt="logo"
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
                    color={activeChat._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    fontWeight='bold'
                    noWrap
                    sx={{width: "100%", overflow: "hidden"}}
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color={activeChat._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

const Contacts = () => {

    return (
        <ContactList/>
    )
}

export default Contacts;

