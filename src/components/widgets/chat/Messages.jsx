// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Card, Stack, Typography, useTheme} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

// utils
import {fontSizeList} from "@/utils/constants.js";

const chatList = [
    {id: 1, text: "سلام دنیا", me: true},
    {id: 2, text: "سلام دنیا", me: false},
    {id: 3, text: "سلام دنیا", me: true},
    {id: 4, text: "سلام دنیا", me: true},
    {id: 5, text: "سلام دنیا", me: false},
];

const MessageItem = ({chat}) => {

    const theme = useTheme();
    const {fontSize} = useSelector(state => state.user.setting);

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                direction: chat.me ? "rtl" : "ltr",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                width: '100%',
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={30}
                height={30}
                style={{borderRadius: "50%"}}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%"
                }}
            >

                <Card
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "start",
                        maxWidth: "45%",
                        bgcolor: chat.me ? "primary.main" : "background.paper",
                        padding: 1,
                    }}
                >

                    <Typography
                        variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        gutterBottom
                    >
                        {chat.text}
                    </Typography>

                    <Typography
                        variant="caption"
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        11:11
                    </Typography>

                </Card>

            </Stack>

        </Stack>
    )
}

const Messages = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                position: "relative",
                zIndex: 20,
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: 2,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                chatList.map(chatItem =>
                    <MessageItem
                        key={chatItem.id}
                        chat={chatItem}
                    />
                )
            }

        </Stack>
    )
}

export default Messages;

