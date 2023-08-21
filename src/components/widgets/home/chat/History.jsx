// libraries
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Stack} from "@mui/material";

// assets
import avatar from "../../../../assets/images/avatar.png";

// components
import * as Message from "./Messages.jsx";

const HistoryItem = ({item}) => {

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: item.me ? "start" : "end",
                alignItems: "end",
                width: '100%',
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={30}
                height={30}
                style={{
                    order: item.me ? 1 : 2,
                    borderRadius: "50%",
                }}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    order: item.me ? 2 : 1,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "max-content",
                }}
            >

                {item.type === "text" && <Message.TextMessage message={item}/>}
                {item.type === "image" && <Message.ImageMessage message={item}/>}
                {item.type === "file" && <Message.FileMessage message={item}/>}
                {item.type === "voice" && <Message.VoiceMessage message={item}/>}
                {item.type === "video" && <Message.VideoMessage message={item}/>}
                {item.type === "location" && <Message.LocationMessage message={item}/>}
                {item.type === "log" && <Message.LogMessage message={item}/>}

            </Stack>

        </Stack>
    )
}

const HistoryList = ({list}) => {

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
                padding: 4,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                list.map(item =>
                    <HistoryItem
                        key={item.id}
                        item={item}
                    />
                )
            }

        </Stack>
    )
}

const History = ({list}) => {

    return (
        <HistoryList list={list}/>
    )
}

export default History;