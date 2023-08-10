// libraries
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, IconButton, Stack, Typography} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";
import {FiMessageCircle, FiPhone, FiVideo} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const userList = [
    {_id: "1"},
    {_id: "2"},
    {_id: "3"},
    {_id: "4"},
    {_id: "5"},
    {_id: "6"},
];

const ContactItem = ({user}) => {

    const navigate = useNavigate();

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
                        style={{
                            borderRadius: "50%",
                            cursor: "pointer",
                        }}
                    />

                </Badge>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "calc(100% - 180px)",
                        cursor: "pointer",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        // color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        className="text-truncate"
                    >
                        علیرضا نقدی
                    </Typography>

                </Box>

                <Stack
                    direction="row"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                    }}
                >

                    <IconButton
                        variant="text"
                        color="primary"
                        onClick={() => {
                            navigate("/video-call");
                        }}
                    >
                        <FiVideo size={20}/>
                    </IconButton>

                    <IconButton
                        variant="text"
                        color="primary"
                        onClick={() => {
                            navigate("/voice-call");
                        }}
                    >
                        <FiPhone size={20}/>
                    </IconButton>

                    <IconButton
                        variant="text"
                        color="primary"
                        onClick={() => {
                            navigate("/chat");
                        }}
                    >
                        <FiMessageCircle size={20}/>
                    </IconButton>

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

