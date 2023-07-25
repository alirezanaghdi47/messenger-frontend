// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box , Card, Stack, Typography, useTheme} from "@mui/material";

// assets
import logo from "@/assets/images/logo.png";

// utils
import {fontSizeList} from "@/utils/constants.js";

const chatList = [
    {id: 1 , text: "سلام دنیا" , me: true},
    {id: 2 , text: "سلام دنیا" , me: false},
    {id: 3 , text: "سلام دنیا" , me: true},
    {id: 4 , text: "سلام دنیا" , me: true},
    {id: 5 , text: "سلام دنیا" , me: false},
];

const MessageList = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                paddingTop: 1,
                paddingBottom: 1,
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
                alignItems: "start",
                width: '100%',
            }}
        >

            <LazyLoadImage
                src={logo}
                alt="logo"
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
                        justifyContent: "end",
                        alignItems: "center",
                        maxWidth: "45%",
                        bgcolor: chat.me ? "primary.main" : "background.paper",
                        padding: 1,
                    }}
                >

                    <Typography
                        variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {chat.text}
                    </Typography>

                </Card>

                <Typography
                    variant="caption"
                    color="textSecondary"
                >
                    11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

const Messages = () => {

    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'start',
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 140px)",
                padding: 2,
            }}
        >

            <MessageList/>

        </Box>
    )
}

export default Messages;

