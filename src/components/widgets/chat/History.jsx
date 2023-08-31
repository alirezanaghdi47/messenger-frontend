// libraries
import SimpleBar from "simplebar-react";
import {useMediaQuery} from "@react-hooks-library/core";
import {Grid} from "@mui/material";

// components
import {FileLog, ImageLog, LocationLog, MusicLog, VideoLog} from "components/widgets/chat/Logs";

const historyList = [
    {id: 1, type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {id: 2, type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {id: 3, type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"},
    {id: 4, type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"},
    {id: 5, type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"},
    {id: 6, type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"},
    {id: 7, type: "music", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"},
    {id: 8, type: "music", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"},
    {id: 9, type: "location", content: [35, 51], me: true},
    {id: 10, type: "location", content: [35, 51], me: false},
];

const HistoryItem = ({historyItem , filter}) => {

    return (
        <>
            {historyItem.type === "image" && filter === "image" && <ImageLog log={historyItem}/>}
            {historyItem.type === "file" && filter === "file" && <FileLog log={historyItem}/>}
            {historyItem.type === "music" && filter === "music" && <MusicLog log={historyItem}/>}
            {historyItem.type === "video" && filter === "video" && <VideoLog log={historyItem}/>}
            {historyItem.type === "location" && filter === "location" && <LocationLog log={historyItem}/>}
        </>
    )
}

const History = ({filter}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <SimpleBar
            style={{
                width: "100%",
                height: isTablet ? "calc(100dvh - 160px)" : 480
            }}
        >

            <Grid
                component="ul"
                container
                rowSpacing={2}
                columnSpacing={isMobile ? 0 : 2}
                sx={{width: "100%" , padding: 1}}
            >

                {
                    historyList.filter(item => item.type === filter).map(historyItem =>
                        <HistoryItem
                            key={historyItem.id}
                            historyItem={historyItem}
                            filter={filter}
                        />
                    )
                }

            </Grid>

        </SimpleBar>
    )
}

export default History;