// libraries
import {Grid} from "@mui/material";

// components
import {
    ImageLog,
    FileLog,
    VoiceLog,
    VideoLog,
    LocationLog
} from "./Logs.jsx";

const HistoryItem = ({item}) => {

    return (
        <>

            {item.type === "image" && <ImageLog message={item}/>}
            {item.type === "file" && <FileLog message={item}/>}
            {item.type === "voice" && <VoiceLog message={item}/>}
            {item.type === "video" && <VideoLog message={item}/>}
            {item.type === "location" && <LocationLog message={item}/>}

        </>
    )
}

const HistoryList = ({list}) => {

    return (
        <Grid
            component="ul"
            container
            spacing={2}
            sx={{
                width: "100%"
            }}
        >

            {
                list.map(item =>
                    <HistoryItem
                        key={item.id}
                        item={item}
                    />
                )
            }

        </Grid>
    )
}

const History = ({list}) => {

    return (
        <HistoryList list={list}/>
    )
}

export default History;